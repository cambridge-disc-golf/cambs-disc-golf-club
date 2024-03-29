<svelte:head>
	<title>Cambridge Disc Golf Club</title>
	<meta name="description" content="Home page for the Cambridge Disc Golf Club.
		The club aims to provide opportunities for players in the Cambridgeshire area." />
</svelte:head>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import EventList from '$lib/EventList.svelte';
</script>

<div class="home-hero-container">
	<picture>
		<source srcset="/photos/leia-hero.webp" type="image/webp" />
		<img
			class="hero-img"
			src="/photos/leia-hero.jpg"
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
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			<div>
				<p class="heading">All welcome</p>
				<p>No experience necessary</p>
			</div>
			<p class="subtle links">
				<a href="/about">About us</a>
				<span class="separator">•</span>
				<a href="/join">Join</a>
				<span class="separator">•</span>
				<a href="#first-visit">On your first visit</a>
			</p>
		</li>
		<li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			<div>
				<p class="heading">Regular Events</p>
				<p>Club rounds & tournaments</p>
			</div>
			<p class="subtle links">
				<a href="#events">Events</a><span class="separator">•</span><a
					href="https://calendar.google.com/calendar/embed?src=467d2i4cnc7k8dpqmqla8r7r5k%40group.calendar.google.com&ctz=Europe%2FLondon"
					>Google Calendar</a
				>
			</p>
		</li>
		<li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon-lg"
				fill="none"
				viewBox="0 0 19 24"
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
					href="https://goo.gl/maps/mjkuvnVjncsBhtCe8">Google Maps</a
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
			Cambridge Disc Golf Club was founded in 2021 with the objectives of
			promoting health, wellness, happiness and community development through
			the learning and enjoyment of disc golf to the Cambridgeshire area. This
			shall be done by means of training sessions, tournaments, leagues, social
			events and more.
		</p>
		<p>
			There are no permanent courses in/around Cambridge, however we have two
			temporary 18-hole courses mapped out (one short, one long) in Papworth
			which just requires someone with a basket.
		</p>
		<p>
			We hold club rounds most Sunday's starting at 11am, and will organise them
			in our
			<a href="https://www.facebook.com/groups/115658245890790"
				>Facebook Group</a
			>. These are the perfect opportunities for beginners, or players new to
			the area to be shown around the course and/or get advice. If you don't
			have any discs, let us know and you should be able to borrow some for the
			round.
		</p>
		<p>
			To find out more about the club, sport, and course, head to our <a
				href="/about">about page</a
			>.
		</p>
	</section>
	<div class="large-join-links flex-center-children">
		<a class="join-club flex-center-children" href="/join">
			<span>Join the Club</span>
		</a>
		<a class="join-fb-group flex-center-children" href="https://www.facebook.com/groups/115658245890790">
			<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" clip-rule="evenodd"
				/></svg
			><span>Facebook Group</span>
		</a>
	</div>
	<section id="first-visit">
		<div class="container">
			<h2>First Visit?</h2>
		</div>
		<div class="container card-container">
			<div>
				<h3>Before the Day</h3>
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
			<div>
				<h3>On the Day</h3>
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
	<section>
		<EventList />
		<h3 id="events-links-heading">UK Events</h3>
		<ul class="events-links-list">
			<li><a href="https://bdga.org.uk/events/">BDGA Events</a></li>
			<li><a href="https://ukwdga.org/events/">UKWDGA Events</a></li>
			<li><a href="https://www.discgolfscene.com/tournaments/England/">Disc Golf Scene</a></li>
		</ul>
	</section>
	<!-- <section class="prose">
		<h2>Getting Here</h2>
		<p><b>By Car:</b></p>
		<p><b>By Bus:</b></p>
	</section> -->
	<div class="full-bleed home-images">
		<img
			loading="lazy"
			src="/photos/hole-8-willem.jpg"
			alt="Male disc golf player under a branch framing the shot"
		/>
		<img
			loading="lazy"
			class="jumper-round-img"
			src="/photos/christmas-round.jpg"
			alt="Club members looking happy after a christmas jumper round"
		/>
		<img
			loading="lazy"
			src="/photos/hole-15-putts.jpg"
			alt="Two players putting towards an elevated basket"
		/>
		<img
			loading="lazy"
			src="/photos/hole-8-leia.jpg"
			alt="Female disc golf player prparing to throw around a tree to the basket"
		/>
	</div>
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
	main > * + * {
		margin-block-start: 2rem;
	}

	h2 {
		scroll-margin-block-start: 4rem;
	}

	.heading-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
	.heading-cards li {
		flex: 1 1 20rem;
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
	.links .separator {
		margin-inline: 1ch;
	}
	.heading-cards li p {
		margin-block: 0.5ex;
	}

	.large-join-links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}
	.large-join-links > a {
		background-color: var(--secondary-bg-color);
		padding: 1rem;
		border-radius: 0.5rem;
		font-size: 1.5rem;
	}
	.join-fb-group {
		padding-block-end: 1.5rem;
	}
	.join-fb-group > span {
		margin-inline-start: 1ch;
	}

	#first-visit .card-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin-block-start: 1rem;
	}
	#first-visit .card-container > div {
		flex: 1 1 20rem;
		background-color: var(--secondary-bg-color);
		padding: 1rem 1.5rem 1rem 1rem;
		border-radius: 0.5rem;
	}
	#first-visit .card-container > div > h3 {
		text-align: center;
	}
	#first-visit .card-container > div > ol li {
		margin-block-start: 0.5rem;
	}

	#events-links-heading {
		margin-block-start: 2rem;
	}
	.events-links-list {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
	}
	.events-links-list li {
		background-color: var(--secondary-bg-color);
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		margin: 1rem;
	}

	.home-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		justify-items: center;
	}
	@media (max-width: 45rem) {
		.home-images {
			grid-template-columns: 100%;
		}
	}
</style>
