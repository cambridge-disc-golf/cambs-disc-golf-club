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
		<p>
			Cambridge Disc Golf Club was founded in 2021 with the objectives of
			promoting health, wellness, happiness and community development through
			the learning and enjoyment of disc golf to the Cambridgeshire area. This
			shall be done by means of training sessions, tournaments, leagues, social
			events and more.
		</p>
	</section>
	<section class="prose">
		<h2>The Course</h2>
		<p>
			We have two courses at the moment, the "Starter Course", and "Papworth
			White". The Starter Course is a great place to start your journey, and is
			the most popular course. The Papworth White course is for when you want a
			bit more of a challenge, with three longer open holes replacing some of
			the shorter, wooded ones.
		</p>
		<picture>
			<source src="/course.avif" type="image/avif" />
			<source src="/course.webp" type="image/webp" />
			<source src="/course.gif" type="image/gif" />
			<img
				src="/course.png"
				alt="Map of the Papworth Disc Golf Course Layout"
			/>
		</picture>
	</section>
	<section class="prose">
		<h2>The Sport</h2>
		<p>
			As you might expect, disc golf has similar rules and objectives to golf.
			Instead of hitting a ball with a club, you throw a disc. Instead of
			putting the ball into a hole, you throw the disc into a "basket". The aim
			is to get the disc in the basket in as few throws ("strokes") as possible.
			Each throw must be taken from where the previous one landed, but you are
			allowed to change discs each throw.
		</p>
		<p>
			Some holes with have out-of-bounds (OB) areas, where you will recieve a
			penalty stroke if you land in it, and have to take your next throw from
			where it last went out of bounds. At Papworth, the first hole has a
			"mandatory" ("mando"), where you have to throw between two trees. If you
			miss this, you will recieve a penalty stroke, and have to take your next
			shot at a "drop zone" between the two trees.
		</p>
		<p>
			Disc golf discs come in different types, shapes, weights and colours. The
			main types are putters, mid-range, fairways and drivers. Beginners are
			normally advised to play with lighter, lower-speed discs. We can lend you
			some discs to try and and see which you like best!
		</p>
	</section>
	<section class="prose committee">
		<h2>The 2022 Club Committee</h2>
		<ul class="reset members">
			<li>
				<div class="profile-pic">
					<div>SR</div>
				</div>
				<div class="content">
					<p class="heading">President</p>
					<p class="name">Scott Rickard</p>
				</div>
			</li>
			<li>
				<div class="profile-pic">
					<div>JP</div>
				</div>
				<div class="content">
					<p class="heading">Vice-President</p>
					<p class="name">Jamie Powell</p>
				</div>
			</li>
			<li>
				<div class="profile-pic">
					<div>JP</div>
				</div>
				<div class="content">
					<p class="heading">Treasurer</p>
					<p class="name">Jamie Pirie</p>
				</div>
			</li>
			<li>
				<div class="profile-pic">
					<div>GE</div>
				</div>
				<div class="content">
					<p class="heading">Women's Officer</p>
					<p class="name">Gabi Everett</p>
				</div>
			</li>
			<li>
				<div class="profile-pic">
					<div>MVS</div>
				</div>
				<div class="content">
					<p class="heading">Secretary</p>
					<p class="name">Matthew Van Schalkwyk</p>
				</div>
			</li>
			<li>
				<div class="profile-pic">
					<img src="/committee/2022/Peter.jpg" aria-hidden="true" alt="" />
				</div>
				<div class="content">
					<p class="heading">Webmaster</p>
					<p class="name">Peter Weightman</p>
				</div>
			</li>
		</ul>
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
	.members {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 2ch;
	}
	.members > li {
		width: clamp(120px, 80%, 170px);
		margin: 0 auto;
	}
	.members > li p {
		margin-block: 0rem;
	}
	.members > li .content {
		margin-block-start: 0.5rem;
		text-align: center;
	}
	.members .profile-pic img {
		width: 100%;
		aspect-ratio: 1;
		border-radius: 1rem;
		margin: 0 auto;
	}
	.members .profile-pic > div {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		width: 100%;
		aspect-ratio: 1;
		border-radius: 1rem;
		background-color: var(--secondary-bg-color);
		margin: 0 auto;
	}
	.members > li .heading {
		margin-block-start: 0.5rem;
	}
</style>
