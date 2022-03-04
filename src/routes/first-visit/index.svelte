<script context="module">
	export const hydrate = false;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav currentPage="first-visit" />

<main class="container">
	<div class="prose">
		<h1>Your First Visit</h1>
	</div>
	<section class="prose">
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
	</section>
	<section class="prose">
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
				If you haven't played before, before the round we'll give you a short
				lesson in how to throw & play.
			</li>
		</ol>
	</section>
	<section>
		<img src="/scott-drive-hole-11.jpg" alt="" />
	</section>
</main>

<Footer />

<style>
	section {
		margin-block-start: 2rem;
	}
	.prose {
		margin-inline-start: 0;
	}
</style>
