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
			<p class="subtle links">
				<a href="https://w3w.co/incoming.exploring.winners"
					>///incoming.exploring.winners</a
				><span class="separator">•</span><a
					href="https://goo.gl/maps/mjkuvnVjncsBhtCe8"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						viewBox="0 0 16 16"
						aria-label="Google"
					>
						<path
							d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
						/>
					</svg><span>Maps</span></a
				>
			</p>
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
			<p class="subtle links">
				<a href="/about">Information for new members</a><span class="separator"
					>•</span
				><a href="https://www.facebook.com/groups/115658245890790"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						aria-label="Facebook"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
						/>
					</svg><span>Group</span></a
				>
			</p>
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
			<p class="subtle links">
				<a href="/courses">Course descriptions</a><span class="separator"
					>•</span
				><a href="https://udisc.com/courses/papworth-everard-l2bt">UDisc</a>
			</p>
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
		display: inline-grid;
		grid-template-columns: auto auto;
		align-items: center;
		justify-content: center;
		gap: 1ch 2ch;
		background-color: var(--secondary-bg-color);
		padding: 1rem 1.5rem 1rem 1rem;
		border-radius: 0.5rem;
	}

	.heading-cards li .links {
		grid-column: span 2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.links a {
		display: inline-flex;
		align-items: center;
	}
	.links a svg {
		margin-inline-end: 0.5ch;
	}
	.links .separator {
		margin-inline: 1ch;
	}

	.heading-cards li p {
		margin-block: 0.5ex;
	}
</style>
