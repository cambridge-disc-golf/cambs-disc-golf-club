<svelte:head>
	<title>Stats | CamDG</title>
	<meta name="description" content="See an overview of your UDisc scorecard data for the Papworth courses" />
</svelte:head>

<script context="module">
	export const prerender = false;
</script>

<script>
    import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

    const PERSON_KEY = "PlayerName";
    const COURSE_NAME_KEY = "CourseName";
    const LAYOUT_NAME_KEY = "LayoutName";
    const DATE_KEY = "Date";
    const ROUND_TOTAL_KEY = "Total";
    const OVERALL_DIFF_KEY = "+/-";
    const isHoleCell = (key) => key.match(/Hole\d+/);

    const SCORECARD_PAR_NAME = "Par";
    const PAPWORTH_NAME = "Papworth Everard";

    let possiblePlayers;
    let selectedPlayer;    
    let playerData;
    let layoutPars;
    let hoveringFileInput = false;

    $: console.log(selectedPlayer);
    $: selectedPlayerData = playerData?.get(selectedPlayer);
    $: layoutsForPerson = selectedPlayerData && Array.from(selectedPlayerData.keys());

    function onFileInputChanged(event) {
        const [file] = event.target.files;
        fileReceived(file);
    }

    async function fileReceived(file) {
        /** @type {string} */
        const text = await file.text();
        const [headerRow, ...scorecardRows] = text
            .trimEnd()
            .split("\n")
            .map(str => str.split(","))
            .slice(0, -1);

        let matchesExpectedColumns = true;
        const expectedColumns = [PERSON_KEY, COURSE_NAME_KEY, LAYOUT_NAME_KEY, DATE_KEY, ROUND_TOTAL_KEY, OVERALL_DIFF_KEY];
        for (let i = 0; i < headerRow.length; i++) {
            const key = headerRow[i];
            const expected = expectedColumns[i];
            if (expected) {
                if (key !== expected) {
                    matchesExpectedColumns = false;
                    break;
                }
            }
            else if (!isHoleCell(key)) {
                matchesExpectedColumns = false;
                break;
            }
        }
        if (!matchesExpectedColumns) {
            throw new Error("Can't parse csv");
        }

        const people = new Set();
        const layouts = new Set();
        const dataPerPerson = new Map();
        const playCounts = new Map();
        layoutPars = new Map();
        
        for (let [player, course, layout, /* date */, /* total */, diff, ...holeScores] of scorecardRows) {
            course = course.trim();
            layout = layout.trim();
            diff = parseInt(diff);
            holeScores = holeScores.map(score => parseInt(score));

            const layoutLabel = `${course} - ${layout}`;
            
            if (course !== PAPWORTH_NAME) continue; // TODO: show all - Or have multiple select defaulting to papworth?
            if (player.includes(" + ")) continue; // TODO: handle teams?
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

            people.add(player);
            layouts.add(layoutLabel);

            const personData = dataPerPerson.get(player) || new Map();
            const layoutData = personData.get(layoutLabel) || new Map();

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
            personData.set(layoutLabel, layoutData);
            playCounts.set(player, (playCounts.get(player) || 0) + 1);
            dataPerPerson.set(player, personData);
        }

        possiblePlayers = Array.from(people).sort();
        playerData = dataPerPerson;
        selectedPlayer = Array.from(playCounts).sort((a, b) => b[1] - a[1])[0][0];
	}
</script>

<Nav currentPage="stats" />

<main class="container">
	<div class="prose">
		<h1>Stats</h1>
        <p>Export your scorecard data to a csv from the UDisc app and then use the file picker below to select it.</p>
	</div>
    {#if possiblePlayers}
        <div>
            <select id="person-picker" bind:value={selectedPlayer}>
                <option value="">Select a person...</option>
                {#each possiblePlayers as person}
                    <option value={person}>{person}</option>
                {/each}
            </select>
        </div>
    {:else}
        <label
            for="scorecard-input"
            on:dragenter|preventDefault={() => hoveringFileInput = true}
            on:dragover|preventDefault={() => hoveringFileInput = true}
            on:dragleave|preventDefault={() => hoveringFileInput = false}
            on:drop|preventDefault={(e) => {
                hoveringFileInput = false;
                const [file] = e.dataTransfer.files;
                fileReceived(file);
            }}
            class:hovering={hoveringFileInput}
        ><p>{hoveringFileInput
            ? "Drop the file here!"
            : "Click & select or drag & drop your UDisc scorecard export here"}</p></label>
        <input class="sr-only" type="file" id="scorecard-input" on:change={onFileInputChanged} accept=".csv" />
    {/if}
    {#if selectedPlayerData}
        <div
            class="layout-data-container"
            class:full-bleed={layoutsForPerson.length > 1}
            class:justify-center={layoutsForPerson.length > 1}
        >
            {#each layoutsForPerson as layout}
                {@const data = selectedPlayerData.get(layout)}
                {@const roundCount = data.get("allDiffs").length}
                {@const averageDiff = (data.get("allDiffs").reduce((acc, curr) => acc + curr, 0) || 0) / roundCount}
                {@const medianDiff = roundCount % 2 === 0
                    ? (data.get("allDiffs").sort()[roundCount / 2 - 1] + data.get("allDiffs").sort()[roundCount / 2]) / 2
                    : data.get("allDiffs").sort()[(roundCount - 1) / 2]}
                {@const personalBest = data.get("allDiffs").reduce((best, curr) => Math.min(best, curr))}
                {@const theoreticalBest =
                    Array.from(data.get("scoreFrequencies")).reduce((acc, [/* hole */, freqs]) => acc + [...freqs.keys()].sort()[0], 0)
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
                            <dd>{personalBest > 0 ? "+" : ""}{personalBest || "E"}</dd>
                        </div>
                        <div>
                            <dt>Average Round (+/-):</dt>
                            <dd>{averageDiff > 0 ? "+" : ""}{averageDiff.toFixed(2)}</dd>
                        </div>
                        <div>
                            <dt>Median Round (+/-):</dt>
                            <dd>{medianDiff > 0 ? "+" : ""}{medianDiff || "E"}</dd>
                        </div>
                        <div>
                            <dt>Theoretical Best Round (+/-):</dt>
                            <dd>{theoreticalBest > 0 ? "+" : ""}{theoreticalBest || "E"}</dd>
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
                            {#each Array.from({ length: layoutPars.get(layout).size }, (v, i) => i + 1) as holeNum (`${selectedPlayer}-${layout}-${holeNum}`)}
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
</main>

<Footer />

<style>
    main > *:not(:first-child) {
        margin-top: 1rem;
    }

    label[for="scorecard-input"] {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary-bg-color);
        border: 2px dashed;
        border-radius: 4px;
    }
    label[for="scorecard-input"]:hover,
    label[for="scorecard-input"]:focus,
    label[for="scorecard-input"].hovering {
        cursor: pointer;
        opacity: 0.75;
        border-color: var(--blue-color);
        border-style: solid;
    }
    label[for="scorecard-input"] p {
        margin: 2rem;
    }

    #person-picker {
        font-size: 1.5rem;
    }
    
    .layout-data-container {
        display: flex;
        gap: 3rem;
        flex-wrap: wrap;
    }

    dt, dd { 
        display: inline;
    }
    dd {
        margin-inline-start: 0.5ch;
    }
</style>
