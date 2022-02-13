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
<div class="container">
	<p>No permanent baskets, but can organise rounds in the facebook group with basket owners. 18 hole course in Papworth Everard starts and ends next to the Village Hall.</p>
	<ul role="list" class="main-links">
		<li><a href="/holes">Hole Descriptions</a></li>
		<li><a href="/bag-tag">Bag Tag Standings</a></li>
		<li><a href="/handicaps">Handicaps</a></li>
	</ul>
	<ul role="list" class="main-links">
		<li><a href="https://www.facebook.com/groups/115658245890790">Facebook Group</a></li>
		<li><a href="https://udisc.com/courses/papworth-everard-l2bt">UDisc</a></li>
		<li><a href="https://goo.gl/maps/mjkuvnVjncsBhtCe8">Google Maps</a></li>
	</ul>
	<picture>
		<source src="/course.avif" type="image/avif"/>
		<source src="/course.webp" type="image/webp"/>
		<source src="/course.gif" type="image/gif"/>
		<img src="/course.png" alt="Map of the Papworth Disc Golf Course Layout" />
	</picture>
</div>

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

	.main-links {
		display: flex;
	}

	.main-links li + li {
		margin-inline-start: 1rem;
	}

	.main-links li {
		background-color: var(--secondary-bg-color);
		padding: 0.8rem;
		border-radius: 2px;
	}
</style>
