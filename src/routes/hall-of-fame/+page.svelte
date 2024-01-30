<script>
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<title>Hall of Fame | CamDG</title>
	<meta
		name="description"
		content="Course record holders, ace throwers, and tournament winners"
	/>
</svelte:head>

<Nav currentPage="hall-of-fame" />

<main class="container">
	<div class="prose">
		<h1>Hall of Fame</h1>
	</div>
	<section class="prose">
		<h2>Course Records</h2>
		<div class="course-record-lists">
			<dl>
				<dt>Starter Course</dt>
				<dd><code>[M]</code> Scott Rickard (-10)</dd>
				<dd><code>[F]</code> Leia Turner (+3)</dd>
			</dl>
			<dl>
				<dt>Papworth White</dt>
				<dd><code>[M]</code> Matt van Scalkwyk (-12)</dd>
				<dd><code>[F]</code> Leia Turner (+3)</dd>
			</dl>
			<dl>
				<dt>Supreme 18</dt>
				<dd><code>[M]</code> Matt van Scalkwyk (-2)</dd>
				<dd><code>[F]</code> Leia Turner (+17)</dd>
			</dl>
		</div>
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
			<li>
				<span class="date">May 2022:</span>
				<span>Leia Turner (-10)</span>
			</li>
			<li>
				<span class="date">June 2022:</span>
				<span>Jack Ryan (-9)</span>
			</li>
			<li>
				<span class="date">July 2022:</span>
				<span>Charlotte Gregg & Jack Ryan (-10)</span>
			</li>
			<li>
				<span class="date">August 2022:</span>
				<span>Simon West (+1)</span>
			</li>
			<li>
				<span class="date">September 2022:</span>
				<span>Henry Griffiths (-3)</span>
			</li>
			<li>
				<span class="date">October 2022<br />(Glow short 9):</span>
				<span>Charlotte (-14.5)</span>
			</li>
			<li>
				<span class="date">November 2022:</span>
				<span>B (-6)</span>
			</li>
			<li>
				<span class="date">December 2022:</span>
				<span>Simon West (-3)</span>
			</li>
			<li>
				<span class="date">January 2023:</span>
				<span>Joshua Ham (-7)</span>
			</li>
			<li>
				<span class="date">February 2023:</span>
				<span>Leia Turner (-5)</span>
			</li>
			<li>
				<span class="date">March 2023:</span>
				<span>Gabi Everett & Joshua Ham (-10)</span>
			</li>
			<li>
				<span class="date">April 2023:</span>
				<span>David Steed (-7)</span>
			</li>
			<li>
				<span class="date">May 2023:</span>
				<span>Doug (-5)</span>
			</li>
			<li>
				<span class="date">June 2023:</span>
				<span>-</span>
			</li>
			<li>
				<span class="date">July 2023:</span>
				<span>Dan (-5)</span>
			</li>
			<li>
				<span class="date">August 2023:</span>
				<span>Peter Weightman (-6)</span>
			</li>
			<li>
				<span class="date">September 2023:</span>
				<span>Joshua Ham (-4)</span>
			</li>
			<li>
				<span class="date">October 2023:</span>
				<span>Lee Riley (-6)</span>
			</li>
			<li>
				<span class="date">November 2023:</span>
				<span>Dan (-5)</span>
			</li>
			<li>
				<span class="date">December 2023:</span>
				<span>Jessica Riley (-6)</span>
			</li>
		</ul>
	</section>
	<section class="prose">
		<h2>Aces</h2>
		<ol>
			<li>Steve Lokie - Hole 17 - 13th March 2022</li>
			<li>Aleksander Gundersen - Hole 11 (White) - 19th November 2022</li>
		</ol>
	</section>
</main>

<Footer />

<style>
	dt {
		font-weight: bold;
		margin-block-end: 0.5rem;
	}
	dd {
		margin: 0;
	}
	.handicap-winners {
		list-style: none;
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 4px;
		padding: 0;
		margin-block-end: 0;
	}
	.handicap-winners li {
		display: contents;
	}
	.handicap-winners li :first-child {
		text-align: right;
	}
	main > section {
		margin-block-start: 1.5rem;
	}

	.course-record-lists {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	.course-record-lists dl {
		flex: 1 1 20rem;
		background-color: var(--secondary-bg-color);
		padding: 1rem 1.5rem 1rem 1rem;
		border-radius: 0.5rem;
		margin: 0;
	}
	.course-record-lists {
		margin-block-start: 1rem;
	}
</style>
