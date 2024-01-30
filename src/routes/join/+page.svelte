<script>
	import Nav from "$lib/Nav.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<title>Join | CamDG</title>
	<meta name="description" content="Info on how to join the club" />
</svelte:head>

<Nav currentPage="join" />

<main class="container">
	<h1>Join the club</h1>
	<div class="join-link-container">
		<a href="https://forms.gle/BG7dJZLN6iDE4A6W8" target="_blank" rel="noreferrer"
			>Sign up form</a
		>
	</div>
	<section>
		<h2>Details</h2>
		<p>
			Membership will run from 1st January to 31st December, and consist of the following
			categories:
		</p>
		<ul>
			<li>Full member (£12)</li>
			<li>Junior member (under 18 at the end of the calendar year) (£6)</li>
		</ul>
		<p>
			6-month membership will be offered from the 1st July with a 50% discount (£6/£3).
			Current UKWDGA members will receive a £2 discount to the cost of membership (£1 off
			6-month membership).
		</p>
	</section>
	<section>
		<h2>Membership benefits</h2>
		<ul>
			<li>Full Voting Rights</li>
			<li>Discount into any tournament organised by the club</li>
			<li>Bag tags</li>
			<li>Entry into monthly handicap competition</li>
		</ul>
	</section>
	<section>
		<h2>Club Documents</h2>
		<ul>
			<li>
				<a href="/club-docs/Constitution.pdf">Constitution</a>
			</li>
			<li>
				<a href="/club-docs/Safeguarding Policy.pdf">Safeguarding Policy</a>
			</li>
			<li>
				<a href="/club-docs/Social Media Policy.pdf">Social Media Policy</a>
			</li>
		</ul>
	</section>
	<section>
		<div class="tag-img-container">
			<img
				class="tag-img"
				src="/photos/tags.png"
				alt="2022 bag tags with King's College design"
			/>
		</div>
	</section>
</main>

<Footer />

<style>
	section {
		margin-block-start: 2rem;
	}
	.join-link-container {
		margin-block-start: 2rem;
	}
	.join-link-container > a {
		background-color: var(--secondary-bg-color);
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		font-size: 1.5rem;
	}
	.tag-img-container {
		display: flex;
	}
	.tag-img {
		margin: 1rem auto;
		width: 100%;
		max-width: 30rem;
	}
</style>
