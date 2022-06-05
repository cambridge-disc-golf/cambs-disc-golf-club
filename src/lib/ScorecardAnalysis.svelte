<script>
    export let playerName;
    export let rowData;
    export let coursePassList; // empty array to show all

    const sumNums = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    const minFromArr = (arr) => arr.sort()[0];
    const medianNum = (arr) => arr.length % 2 === 0
        ? (arr.sort()[arr.length / 2 - 1] + arr.sort()[arr.length / 2]) / 2
        : arr.sort()[(arr.length - 1) / 2];
    const formatRoundDiffInt = (diff) => `${diff > 0 ? "+" : ""}${diff || "E"}`;
    const formatRoundDiffFloat = (diff) => `${diff > 0 ? "+" : ""}${diff.toFixed(2)}`;

    const SCORECARD_PAR_NAME = "Par";

    let layoutPars = new Map();
    let analysis = new Map();
    let layoutsForPerson = [];

    $: analyseData(rowData, coursePassList);

    function analyseData(scorecardRows, coursesToShow) {
        analysis.clear();
        layoutPars.clear();
        
        for (let [player, course, layout, /* date */, /* total */, diff, ...holeScores] of scorecardRows) {
            course = course.trim();
            layout = layout.trim();
            diff = parseInt(diff);
            holeScores = holeScores.map(score => parseInt(score));
                
            const layoutLabel = `${course} - ${layout}`;
            
            if (coursesToShow.length && !coursesToShow.includes(course)) continue;
            if (player === SCORECARD_PAR_NAME) {
                if (layoutPars.has(layoutLabel)) continue;
    
                const pars = new Map();
                for (let holeIdx = 0; holeIdx < 18; holeIdx++) {
                    const holeScore = parseInt(holeScores[holeIdx]);
                    if (!Number.isInteger(holeScore)) break;
                    const holeNum = holeIdx + 1;
                    pars.set(holeNum, holeScore);
                }
    
                layoutPars.set(layoutLabel, pars);
                continue;
            }
    
            const layoutData = analysis.get(layoutLabel) || new Map();
    
            layoutData.set("allDiffs", (layoutData.get("allDiffs") || []).concat([diff]));
            const scoreFrequencies = layoutData.get("scoreFrequencies") || new Map();
    
            let maxScore = layoutData.get("maxScore") || 0;
            for (let holeIdx = 0; holeIdx < 18; holeIdx++) {
                const holeScore = holeScores[holeIdx];
                if (!holeScore) continue; // can happen if people play a partial round
                const holeNum = holeIdx + 1;
                const holeFrequencies = scoreFrequencies.get(holeNum) || new Map();
                const holeScoreFrequency = holeFrequencies.get(holeScore) || 0;
    
                holeFrequencies.set(holeScore, holeScoreFrequency + 1);
                scoreFrequencies.set(holeNum, holeFrequencies)
                if (holeScore > maxScore) maxScore = holeScore;
            }
    
            layoutData.set("scoreFrequencies", scoreFrequencies);
            layoutData.set("maxScore", maxScore);
            analysis.set(layoutLabel, layoutData);
        }

        layoutsForPerson = Array.from(layoutPars.keys());
    }
</script>

{#if layoutsForPerson.length === 0 }
    No Data
{:else}
    {#each layoutsForPerson as layout}
        {@const data = analysis.get(layout)}
        {@const roundCount = data.get("allDiffs").length}
        {@const averageDiff = (sumNums(data.get("allDiffs")) || 0) / roundCount}
        {@const medianDiff = medianNum(data.get("allDiffs"))}
        {@const personalBest = minFromArr(data.get("allDiffs"))}
        {@const theoreticalBest =
            Array.from(data.get("scoreFrequencies")).reduce((acc, [/* hole */, freqs]) => acc + minFromArr(Array.from(freqs.keys())), 0)
            - Array.from(data.get("scoreFrequencies")).reduce((acc, [hole]) => acc + layoutPars.get(layout).get(hole), 0)}
        <section>
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
{/if}

<style>
    dt, dd { 
        display: inline;
    }
    dd {
        margin-inline-start: 0.5ch;
    }
</style>