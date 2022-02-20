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
	<section class="prose">
		<h2>The Committee</h2>
		<ul>
			<li><b>President</b> - Scott Rickard</li>
			<li><b>Vice-President</b> - Jamie Powell</li>
			<li><b>Treasurer</b> - Jamie Pirie</li>
			<li><b>Women's Officer</b> - Gabi Everett</li>
			<li><b>Secretary</b> - Matthew Van Schalkwyk</li>
			<li><b>Webmaster</b> - Peter Weightman</li>
		</ul>
	</section>
</main>

<Footer />

<style>
	.prose {
		margin-inline-start: 0;
	}
</style>
