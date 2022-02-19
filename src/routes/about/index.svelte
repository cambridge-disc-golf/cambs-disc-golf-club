<script context="module">
	export const hydrate = false;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav currentPage="about" />

<main class="container">
	<div class="prose">
		<h1>About</h1>
	</div>
	<section class="prose">
		<h2>The Club</h2>
	</section>
	<section class="prose">
		<h2>The Course</h2>
	</section>
	<section class="prose">
		<h2>The Sport</h2>
	</section>
	<section class="prose">
		<h2>The Committee</h2>
	</section>
</main>

<Footer />
