<script context="module">
	export const prerender = true;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="home-hero-container">
	<picture>
		<source src="/leia-hero.webp" type="image/webp" />
		<img
			class="hero-img"
			src="/leia-hero.jpg"
			alt="A disc golfer about to throw towards a basket with Papworth Hall in the background"
		/>
	</picture>
	<div class="title-container pin">
		<h1>Cambridge <br />Disc Golf Club</h1>
	</div>
</div>

<Nav currentPage="home" />

<main class="container">
	<ul class="reset heading-cards">
		<li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
			<div>
				<p class="heading">Papworth Everard</p>
				<p>25 mins from Cambridge</p>
			</div>
		</li>
		<li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			<div>
				<p class="heading">All welcome</p>
				<p>No experience necessary</p>
			</div>
		</li>
		<li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
				/>
			</svg>
			<div>
				<p class="heading">Short & Long Course</p>
				<p>Wooded & open holes.</p>
			</div>
		</li>
	</ul>
	<section class="prose">
		<h2>About us</h2>
		<p>
			Cambridge Disc Golf club welcomes all players of all abilities, no
			experience necessary!
		</p>
		<p>
			There are no permanent courses in/around Cambridge, however we have two
			temporary 18-hole courses mapped out (one short, one long) in Papworth
			which just requires someone with a basket.
		</p>
		<p>
			We organise club rounds most Sunday's starting at 11am, and will organise
			them in our
			<a href="https://www.facebook.com/groups/115658245890790"
				>Facebook Group</a
			>. These are the perfect opportunities for beginners, or players new to
			the area to be shown around the course and/or get advice. If you don't
			have any discs, let us know and you should be able to borrow some for the
			round.
		</p>
		<p>
			Occasionally we'll hold tournaments where scores are adjusted by their
			handicap, and we have club bag tags which are up for grabs whenever club
			members play on a card together.
		</p>
	</section>
	<img
		class="jumper-round-img"
		src="/christmas-round.jpg"
		alt="Club members looking happy after a christmas jumper round"
	/>
	<!-- <picture>
		<source src="/course.avif" type="image/avif" />
		<source src="/course.webp" type="image/webp" />
		<source src="/course.gif" type="image/gif" />
		<img src="/course.png" alt="Map of the Papworth Disc Golf Course Layout" />
	</picture> -->
</main>

<Footer />

<style>
	.home-hero-container picture {
		object-fit: cover;
	}
	.home-hero-container .title-container {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: flex-end;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
		padding-block-end: 1.5rem;
	}
	.home-hero-container .title-container h1 {
		display: flex;
		text-align: center;
		font-size: clamp(3rem, 7vw, 5rem);
		margin: 0;
		color: var(--light-color);
	}
	@media (min-width: 570px) {
		.home-hero-container .title-container h1 br {
			display: none;
		}
	}
	.hero-img {
		height: clamp(40vh, 50vw, 60vh);
		width: 100%;
		object-fit: cover;
		object-position: center;
	}
	main > img,
	main > picture img {
		display: block;
		width: 100%;
		max-width: 45rem;
		margin-inline: auto;
	}

	main > * + * {
		margin-block: 2rem;
	}

	.heading-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	.heading-cards li {
		flex: 1 1 18rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2ch;
		background-color: var(--secondary-bg-color);
		padding: 1rem 1.5rem 1rem 1rem;
		border-radius: 0.5rem;
	}

	.heading-cards li p {
		margin-block: 0.5ex;
	}
</style>
