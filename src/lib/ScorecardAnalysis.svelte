<script>
    export let playerName;
    export let rowData;
    export let coursePassList; // empty array to show all

    const sumNums = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    const minFromArr = (arr) => arr.sort((a, b) => a - b)[0];
    const medianNum = (arr) => arr.length % 2 === 0
        ? (arr.sort((a, b) => a - b)[arr.length / 2 - 1] + arr.sort((a, b) => a - b)[arr.length / 2]) / 2
        : arr.sort((a, b) => a - b)[(arr.length - 1) / 2];
    const formatRoundDiffInt = (diff) => `${diff > 0 ? "+" : ""}${diff || "E"}`;
    const formatRoundDiffFloat = (diff) => `${diff > 0 ? "+" : ""}${diff.toFixed(2)}`;

    const SCORECARD_PAR_NAME = "Par";
    const PAPWORTH_COURSE_NAME = "Papworth Everard";
    const PAPWORTH_STARTER_LAYOUT_NAME = "Starter Course";
    const PAPWORTH_WHITE_LAYOUT_NAME = "Papworth White";

    const HANDICAP_ADJUST = {
        [PAPWORTH_COURSE_NAME]: {
            [PAPWORTH_STARTER_LAYOUT_NAME]: -3,
            [PAPWORTH_WHITE_LAYOUT_NAME]: 0,
        },
    };
    const ONE_YEAR_AGO = (() => {
        const d = new Date();
        d.setFullYear(d.getFullYear() - 1);
        return d;
    })();
    const eligibleForHandicapCalc = (course, layout, dateStr) => HANDICAP_ADJUST[course] !== undefined && HANDICAP_ADJUST[course][layout] !== undefined && new Date(dateStr) > ONE_YEAR_AGO;
    let handicapCalcRounds = [];
    const HANDICAP_BEST_OF = 10;

    let layoutPars = new Map();
    let layoutHoleCount = new Map();
    let analysis = new Map();
    let layoutsForPerson = [];
    let handicap = null;

    $: analyseData(rowData, coursePassList);

    function analyseData(scorecardRows, coursesToShow) {
        analysis.clear();
        layoutPars.clear();
        layoutHoleCount.clear();
        handicap = null;
        handicapCalcRounds = [];
        
        let holesForRound = 18;
        for (let [player, course, layout, dateStr, /* total */, diff, ...holeScores] of scorecardRows) {
            course = course.trim();
            layout = layout.trim();
            diff = parseInt(diff);
            holeScores = holeScores.map(score => parseInt(score));
                
            const layoutLabel = `${course} - ${layout}`;
            
            if (coursesToShow.length && !coursesToShow.includes(course)) continue;
            if (player === SCORECARD_PAR_NAME) {
                if (layoutPars.has(layoutLabel)) continue;
    
                const pars = new Map();
                let holeIdx = 0;
                let holeScore = parseInt(holeScores[holeIdx]);
                do {
                    const holeNum = holeIdx + 1;
                    pars.set(holeNum, holeScore);
                    holeIdx++;
                    holeScore = parseInt(holeScores[holeIdx]);
                }
                while (Number.isInteger(holeScore));
                
                layoutHoleCount.set(layoutLabel, holeIdx);
                layoutPars.set(layoutLabel, pars);
                continue;
            }

            const layoutData = analysis.get(layoutLabel) || new Map();
    
            layoutData.set("allDiffs", (layoutData.get("allDiffs") || []).concat([diff]));
            const scoreFrequencies = layoutData.get("scoreFrequencies") || new Map();
    
            let maxScore = layoutData.get("maxScore") || 0;
            let isPartialRound = false;
            for (let holeIdx = 0; holeIdx < layoutHoleCount.get(layoutLabel); holeIdx++) {
                const holeScore = holeScores[holeIdx];
                if (!holeScore) {
                    isPartialRound = true;
                    continue;
                }
                const holeNum = holeIdx + 1;
                const holeFrequencies = scoreFrequencies.get(holeNum) || new Map();
                const holeScoreFrequency = holeFrequencies.get(holeScore) || 0;
    
                holeFrequencies.set(holeScore, holeScoreFrequency + 1);
                scoreFrequencies.set(holeNum, holeFrequencies)
                if (holeScore > maxScore) maxScore = holeScore;
            }

            if (!isPartialRound && eligibleForHandicapCalc(course, layout, dateStr)) {
                const adjust = HANDICAP_ADJUST[course][layout];
                const adjustedDiff = diff - adjust;
                if (handicapCalcRounds.length < HANDICAP_BEST_OF || adjustedDiff < handicapCalcRounds[HANDICAP_BEST_OF - 1]) {
                    if (handicapCalcRounds.length === HANDICAP_BEST_OF) {
                        handicapCalcRounds.pop();
                    } 
                    handicapCalcRounds.push(adjustedDiff);
                    handicapCalcRounds.sort((a, b) => a - b);
                }
            }
    
            layoutData.set("scoreFrequencies", scoreFrequencies);
            layoutData.set("maxScore", maxScore);
            analysis.set(layoutLabel, layoutData);
        }

        layoutsForPerson = Array.from(layoutPars.keys());
        handicap = handicapCalcRounds.length ? Math.round(sumNums(handicapCalcRounds) / handicapCalcRounds.length) : null;
    }
</script>

{#if layoutsForPerson.length === 0 }
    No Data
{:else}
    <div class="container">
        {#if handicap !== null}
            <dl class="overall-stats">
                <dt>Handicap:</dt>
                <dd>{formatRoundDiffInt(handicap)}</dd>
            </dl>
        {/if}
    </div>
    <div
        class="layouts-container" 
        class:justify-center={layoutsForPerson.length > 1}
    >
        {#each layoutsForPerson as layout}
            {@const data = analysis.get(layout)}
            {@const roundCount = data.get("allDiffs").length}
            {@const averageDiff = (sumNums(data.get("allDiffs")) || 0) / roundCount}
            {@const medianDiff = medianNum(data.get("allDiffs"))}
            {@const personalBest = minFromArr(data.get("allDiffs"))}
            {@const theoreticalBest =
                Array.from(data.get("scoreFrequencies")).reduce((acc, [/* hole */, freqs]) => acc + minFromArr(Array.from(freqs.keys())), 0)
                - Array.from(data.get("scoreFrequencies")).reduce((acc, [hole]) => acc + layoutPars.get(layout).get(hole), 0)}
            <section class="layout-container">
                <h2>{layout}</h2>
                <dl>
                    <div>
                        <dt>Total Rounds:</dt>
                        <dd>{roundCount}</dd>
                    </div>
                    <div>
                        <dt>PB (+/-):</dt>
                        <dd>{formatRoundDiffInt(personalBest)}</dd>
                    </div>
                    <div>
                        <dt>Average Round (+/-):</dt>
                        <dd>{formatRoundDiffFloat(averageDiff)}</dd>
                    </div>
                    <div>
                        <dt>Median Round (+/-):</dt>
                        <dd>{formatRoundDiffInt(medianDiff)}</dd>
                    </div>
                    <div>
                        <dt>Theoretical Best Round (+/-):</dt>
                        <dd>{formatRoundDiffInt(theoreticalBest)}</dd>
                    </div>
                </dl>
                <table class="text-center">
                    <thead>
                        <tr>
                            <td>Hole</td>
                            <td>Par</td>
                            <td>Avg.</td>
                            {#each Array.from({ length: data.get("maxScore") }, (v, i) => i + 1) as throwCount}
                                <td>{throwCount}</td>
                            {/each}
                        </tr>
                    </thead>
                    <tbody>
                        {#each Array.from({ length: layoutPars.get(layout).size }, (v, i) => i + 1) as holeNum (`${playerName}-${layout}-${holeNum}`)}
                            {@const par = layoutPars.get(layout).get(holeNum)}
                            {@const freqs = data.get("scoreFrequencies").get(holeNum) || new Map()}
                            {@const holePlayCount = Array.from(freqs).reduce((total, curr) => total + curr[1], 0) || 0}
                            {@const avg = holePlayCount && (Array.from(freqs).reduce((total, curr) => total + curr[0] * curr[1], 0) / holePlayCount)}
                            <tr>
                                <td>{holeNum}</td>
                                <td>{par}</td>
                                <td style:color={!holePlayCount ? undefined : (avg < par) ? "var(--green-color)" : (avg >= (par + 1)) ? "var(--red-color)" : undefined}>{holePlayCount ? avg.toFixed(2) : "-"}</td>
                                {#each Array.from({ length: data.get("maxScore") }, (v, i) => i + 1) as throwCount}
                                    {@const throwFreq = freqs.get(throwCount) || 0}
                                    {@const countIsPar = throwCount === par}
                                    <td
                                        style:background-color={`hsla(var(--heatmap-cell-h), var(--heatmap-cell-s), var(--heatmap-cell-l), ${throwFreq / holePlayCount})`}
                                        style:color={throwFreq > holePlayCount / 3 ? "var(--inv-color)" : "var(--color)"}
                                        style:border={countIsPar ? "2px solid var(--heatmap-cell-highlight)" : undefined}
                                    >{throwFreq || (countIsPar ? 0 : "")}</td>
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </section>
        {/each}
    </div>
{/if}

<style>
    .layouts-container {
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
    }
    .layout-container {
        overflow: auto;
    }
    .layout-container > :not(table) {
        position: sticky;
        left: 0;
    }
    dt, dd { 
        display: inline;
    }
    dd {
        margin-inline-start: 0.5ch;
    }
    .overall-stats {
        font-size: 1.5rem;
        margin-top: 0;
    }
</style>