<svelte:head>
	<title>Stats | CamDG</title>
	<meta name="description" content="See an overview of your UDisc scorecard data for the Papworth courses" />
</svelte:head>

<script>
    import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
    import ScorecardAnalysis from '$lib/ScorecardAnalysis.svelte';
    import { onMount } from 'svelte';

    const PERSON_KEY = "PlayerName";
    const COURSE_NAME_KEY = "CourseName";
    const LAYOUT_NAME_KEY = "LayoutName";
    const DATE_KEY = "Date";
    const ROUND_TOTAL_KEY = "Total";
    const OVERALL_DIFF_KEY = "+/-";
    const isHoleCell = (key) => key.match(/Hole\d+/);

    const SCORECARD_PAR_NAME = "Par";
    const PAPWORTH_NAME = "Papworth Everard";
    let selectedCourses = [PAPWORTH_NAME];

    onMount(() => {
        const params = new URLSearchParams(location.search);
        if (params.has("course")) {
            const course = params.get("course");
            if (["all", "*"].includes(course)) {
                selectedCourses = [];
            }
            else {
                selectedCourses = [course];
            }
        }
    });

    let possiblePlayers;
    let selectedPlayer;
    let rowsGroupedByPerson;  
    let hoveringFileInput = false;

    $: selectedPlayerData = rowsGroupedByPerson?.get(selectedPlayer);
    $: layoutsForPerson = selectedPlayerData && new Set(selectedPlayerData.map(([/* person */, course, layout]) => `${course} - ${layout}`));

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

        rowsGroupedByPerson = new Map();
        let currentParRow = null;
        for (const row of scorecardRows) {
            let [player, course] = row;
            course = course.trim();

            if (player === SCORECARD_PAR_NAME) {
                currentParRow = row;
            } else if (player.includes(" + ")) {
                continue; // TODO: handle teams?
            } else if (selectedCourses.length && !selectedCourses.includes(course)) {
                continue; // TODO: show all - Or have multiple select defaulting to papworth?
            } else if (rowsGroupedByPerson.has(player)) {
                rowsGroupedByPerson.get(player).push(currentParRow, row);
            } else {
                rowsGroupedByPerson.set(player, [currentParRow, row]);
            }
        }

        const sortedPeople = Array.from(rowsGroupedByPerson.keys())
            .map(name => ({ name, count: rowsGroupedByPerson.get(name).length }))
            .sort((a, b) => a.count > b.count ? -1
                : b.count > a.count ? +1
                : a.name.localeCompare(b.name))
            .map(x => x.name);

        possiblePlayers = sortedPeople;
        selectedPlayer = sortedPeople[0];
	}
</script>

<Nav currentPage="stats" />

<main class="container">
	<div class="prose">
		<h1>Stats</h1>
        <p>Export your scorecard data to a csv from the UDisc app and then use the file picker below to select it.</p>
        <p class="subtle">To get your UDisc scorecard data, open the UDisc app, go to "More", then "Scorecards", click the icon in the top right, then "Export to CSV".</p>
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
    {#if selectedPlayer}
        <div
            class:full-bleed={layoutsForPerson.size > 1}
        >
            <ScorecardAnalysis playerName={selectedPlayer} rowData={rowsGroupedByPerson?.get(selectedPlayer)} coursePassList={selectedCourses} />
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
</style>
