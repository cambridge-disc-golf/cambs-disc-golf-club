<script context="module">
	export const hydrate = false;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav currentPage="first-visit" />

<main>
	<div class="container">
		<div class="prose">
			<h1>Your First Visit</h1>
		</div>
	</div>
	<section id="before-the-day-section">
		<div class="container">
			<div class="prose">
				<h2>Before the Day</h2>
				<ol>
					<li>
						Check out our <a href="/#events">Calendar</a> to find a round or tournament
						to join us for (usually every Sunday).
					</li>
					<li>
						Let us know you're coming! Post in our <a
							href="https://www.facebook.com/groups/115658245890790"
							>Facebook Group</a
						>, or send us a message.
					</li>
					<li>
						If you don't have any discs, let us know and we'll bring some along.
					</li>
				</ol>
			</div>
		</div>
	</section>
	<svg
		viewbox="0 0 2400 128"
		class="wavy-hr"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 36.003c43.75 1.875 125.412 14.625 210.828 9 85.417-5.625 116.667-37.041 200-36 83.334 1.042 116.667 40.375 200 41 83.334.625 116.667-38.625 200-38 83.334.625 116.667 43.5 200 41 83.334-2.5 116.667-52.375 200-53 83.334-.625 116.667 45 200 50 83.334 5 116.667-30.791 200-26 83.334 4.792 116.667 51.5 200 49 83.334-2.5 116.667-63.708 200-61 83.334 2.709 118.75 69 200 74s95.422-120.833 189.172-50V128H0V36.003Zm0 41.003V128h2400V77.006c-93.75-70.833-107.75 55-189 50s-116.667-71.291-200-74c-83.333-2.708-116.667 58.5-200 61s-116.667-44.208-200-49c-83.333-4.791-116.667 31-200 26s-116.667-50.625-200-50-116.667 50.5-200 53-116.667-40.375-200-41-116.667 38.625-200 38-116.667-39.958-200-41c-83.333-1.041-114.583 30.375-200 36s-167.25-7.125-211-9Z"
			fill-rule="nonzero"
		/>
	</svg>
	<section id="on-the-day-section">
		<div class="container">
			<div class="prose">
				<h2>On the Day</h2>
				<ol>
					<li>
						Check the forecast and dress approriately (we still play in wind and
						rain!)
					</li>
					<li>
						Give yourself long enough to arrive on time.
						<a href="https://goo.gl/maps/mjkuvnVjncsBhtCe8">Google Maps</a>
						<!-- Advice for <a
					href="/#getting-here">getting here</a
				>. -->
					</li>
					<li>
						If you haven't played before, before the round we'll give you a
						short lesson in how to throw & play.
					</li>
				</ol>
			</div>
		</div>
	</section>
	<section class="container">
		<img src="/scott-drive-hole-11.jpg" alt="" />
	</section>
</main>

<Footer />

<style>
	main > * {
		margin-block-start: 2rem;
	}
	.prose {
		margin-inline-start: 0;
	}

	ol {
		list-style: none;
		counter-reset: first-visit-counter;
		padding-inline-start: 0;
	}

	li {
		counter-increment: first-visit-counter;
	}

	li + li {
		margin-top: 1rem;
	}

	li::before {
		content: counter(first-visit-counter) '.';
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5em;

		width: 1.5em;
		height: 1.5em;
		padding: 0.2em;
		border-radius: 50%;
		margin-inline-end: 0.5rem;

		background-color: var(--secondary-bg-color);
	}

	.wavy-hr {
		opacity: 0.5;
		fill: var(--accent-color);
	}
</style>
