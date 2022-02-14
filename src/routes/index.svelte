<script context="module">
	export const prerender = true;
</script>

<div class="home-hero-container">
	<picture>
		<source src="/leia-hero.webp" type="image/webp"/>
		<img class="hero-img" src="/leia-hero.jpg" alt="A disc golfer about to throw towards a basket with Papworth Hall in the background" />
	</picture>
	<div class="title-container pin">
		<h1>Cambridge Disc Golf Club </h1>
	</div>
</div>

<main class="container">
	<p>Cambridge Disc Golf club welcomes all players of all abilities, no experience necessary!</p>
	<p>There are no permanent courses in/around Cambridge, however we have two temporary 18-hole
		courses mapped out (one short, one long) in Papworth which just requires someone with a basket.</p>
	<img class="jumper-round-img" src="/christmas-round.jpg" alt="Club members looking happy after a christmas jumper round">
	<p>We organise club rounds most Sunday's starting at 11am, and will organise them in our
		<a href="https://www.facebook.com/groups/115658245890790">Facebook Group</a>.
		These are the perfect opportunities for beginners, or players new to the area to be
		shown around the course and/or get advice. If you don't have any discs, let us know and you
		should be able to borrow some for the round.</p>
	<p>Occasionally we'll hold tournaments where scores are adjusted by their handicap, and we have
		club bag tags which are up for grabs whenever club members play on a card together.</p>
	<picture>
		<source src="/course.avif" type="image/avif"/>
		<source src="/course.webp" type="image/webp"/>
		<source src="/course.gif" type="image/gif"/>
		<img src="/course.png" alt="Map of the Papworth Disc Golf Course Layout" />
	</picture>
</main>

<footer>
	<div class="container">
		<div>
			<p class="heading" id="footer-pages-heading">Pages</p>
			<ul aria-labelledby="footer-pages-heading">
				<li><a href="/holes">Hole Descriptions</a></li>
				<li><a href="/bag-tag">Bag Tag Standings</a></li>
				<li><a href="/handicaps">Handicaps</a></li>
			</ul>
		</div>
		<div>
			<p class="heading" id="footer-links-heading">Links</p>
			<ul aria-labelledby="footer-links-heading">
				<li><a href="https://www.facebook.com/groups/115658245890790">Facebook Group</a></li>
				<li><a href="https://udisc.com/courses/papworth-everard-l2bt">UDisc</a></li>
				<li><a href="https://goo.gl/maps/mjkuvnVjncsBhtCe8">Google Maps</a></li>
			</ul>
		</div>
	</div>
</footer>

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
		font-size: clamp(1rem, 7vw, 5rem);
		margin: 0;
		color: var(--light-color);
	}
	.hero-img {
		height: clamp(40vh, 50vw, 60vh);
		width: 100%;
		object-fit: cover;
		object-position: center;
	}

	main {
		padding: 1rem;
	}
	main > img,
	main > picture img {
		display: block;
		margin-block: 3rem;
		width: 100%;
		max-width: 45rem;
		margin-inline: auto;
	}

	footer {
		background-color: var(--secondary-bg-color);
	}
	footer .heading {
		font-size: 1.1em;
	}
	footer .container {
		display: flex;
		flex-wrap: wrap;
	}
	footer .container > * {
		margin-inline-end: 2rem;
	}
	footer .container ul {
		padding-inline-start: 1.5ch;
	}
	footer .container ul li {
		margin-block: 1ex;
	}
</style>
