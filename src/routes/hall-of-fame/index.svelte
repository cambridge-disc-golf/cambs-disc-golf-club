<svelte:head>
	<title>Hall of Fame | CamDG</title>
	<meta name="description" content="Course record holders, ace throwers, and tournament winners" />
</svelte:head>

<script context="module">
	export const hydrate = false;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav currentPage="hall-of-fame" />

<main class="container">
	<div class="prose">
		<h1>Hall of Fame</h1>
	</div>
	<section class="prose">
		<h2>Course Records</h2>
        <dl>
            <dt>Starter Course</dt>
            <dd>[M] Scott Rickard (-10)</dd>
            <dd>[F] Leia Turner (+3)</dd>
        </dl>
        <dl>
            <dt>Papworth White</dt>
            <dd>[M] Scott Rickard; Matt van Scalkwyk (-7)</dd>
            <dd>[F] Leia Turner (+8)</dd>
        </dl>
	</section>
	<section class="prose">
		<h2>Handicap Tournaments</h2>
        <ul class="handicap-winners">
            <li>
                <span class="date">December 2021:</span>
                <span>James Good (-6)</span>
            </li>
            <li>
                <span class="date">January 2022:</span>
                <span>Gabi Everett (-13)</span>
            </li>
            <li>
                <span class="date">February 2022:</span>
                <span>Joshua Ham (-10)</span>
            </li>
            <li>
                <span class="date">March 2022:</span>
                <span>B (-11)</span>
            </li>
            <li>
                <span class="date">April 2022:</span>
                <span>Leia Turner (-10)</span>
            </li>
        </ul>
	</section>
	<section class="prose">
		<h2>Aces</h2>
        <ol>
            <li>Steve Lokie - Hole 17 - 13th March 2022</li>
        </ol>
	</section>
</main>

<Footer />

<style>
    dt {
        font-weight: bold;
    }
    dd {
        margin: 0;
    }
    .handicap-winners {
        list-style: none;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 4px;
        padding: 0;
    }
    .handicap-winners li {
        display: contents;
    }
    .handicap-winners li :first-child {
        text-align: right;
    }
</style>
