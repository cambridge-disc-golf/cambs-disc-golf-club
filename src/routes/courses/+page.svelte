<svelte:head>
	<title>Courses | CamDG</title>
	<meta name="description" content="An overview of the courses in Papworth that the club regularly plays." />
	<link rel="stylesheet" href="/lite-youtube-embed/lite-yt-embed.css" />
	<script src="/lite-youtube-embed/lite-yt-embed.mjs"></script>
</svelte:head>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import("../../lib/types").HoleInfo[]} */
	export let data;
</script>

<Nav currentPage="courses" />

<main class="container">
	<h1>Courses</h1>
	<section>
		<h2>Starter Course</h2>

		<picture>
			<source srcset="/course.avif" type="image/avif" />
			<source srcset="/course.webp" type="image/webp" />
			<source srcset="/course.gif" type="image/gif" />
			<img
				src="/course.png"
				alt="Map of the Papworth Disc Golf Course Layout"
			/>
		</picture>

		<ul class="course-info-list prose">
			{#each data.holeInfo as holeInfo}
				<li>
					<div class="hole-info-heading">
						<h3>Hole {holeInfo.hole}</h3>
						<span class="subtle">Par {holeInfo.par} • {holeInfo.distance}m</span>
					</div>
					<p>{holeInfo.description}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h2>Papworth White</h2>
		<div class="video-container">
			<lite-youtube videoid="GJZ45rMH7rY" playlabel="Papworth long course playthrough"></lite-youtube>
		</div>
	</section>
</main>

<Footer />

<style>
	main > section {
		margin-block-start: 2rem;
	}

	.course-info-list {
		list-style: none;
		padding: 0;
	}

	.course-info-list li {
		margin-block-start: 1.5rem;
	}

	.course-info-list li p {
		margin-block-start: 0.5rem;
	}

	.hole-info-heading {
		display: flex;
		align-items: baseline;
		gap: 1ch;
	}

	.video-container {
		margin-block-start: 1rem;
	}
</style>
