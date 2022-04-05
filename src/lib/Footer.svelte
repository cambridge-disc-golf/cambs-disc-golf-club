<script>
	let year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-links-container">
			<div>
				<p class="heading" id="footer-pages-heading">Pages</p>
				<ul aria-labelledby="footer-pages-heading">
					<li><a aria-current="page" href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/courses">Courses</a></li>
					<!-- <li><a href="/bag-tag">Bag Tag Standings</a></li>
					<li><a href="/handicaps">Handicaps</a></li> -->
				</ul>
			</div>
			<div>
				<p class="heading" id="footer-links-heading">Links</p>
				<ul aria-labelledby="footer-links-heading">
					<li>
						<a href="https://www.facebook.com/groups/115658245890790"
							>Facebook Group</a
						>
					</li>
					<li>
						<a href="https://udisc.com/courses/papworth-everard-l2bt">UDisc</a>
					</li>
					<li>
						<a href="https://goo.gl/maps/mjkuvnVjncsBhtCe8">Google Maps</a>
					</li>
				</ul>
			</div>
			<div>
				<p class="heading" id="footer-ext-links-heading">Disc Golf Associations (DGAs)</p>
				<ul aria-labelledby="footer-ext-links-heading">
					<li>
						<a href="https://bdga.org.uk" target="_blank" rel="noreferrer">British DGA</a>
					</li>
					<li>
						<a href="https://ukwdga.org" target="_blank" rel="noreferrer">UK Women's DGA</a>
					</li>
					<li>
						<a href="https://www.pdga.com" target="_blank" rel="noreferrer">Professional DGA</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="footer-copyright">
			<img class="logo" src="/CamDG.png" alt="Logo" />
			<span>&copy; {year} Cambridge Disc Golf Club</span>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--secondary-bg-color);
	}
	footer .heading {
		font-size: 1.1em;
	}
	footer .container {
		padding: 1rem;
	}
	.footer-links-container {
		display: flex;
		flex-wrap: wrap;
	}
	.footer-links-container > * {
		margin-inline-end: 2rem;
	}
	.footer-links-container ul {
		padding-inline-start: 1.5ch;
	}
	.footer-links-container ul li {
		margin-block: 1ex;
	}
	.footer-copyright {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logo {
		height: 2rem;
		margin-inline: 1rem;
	}
	@media (prefers-color-scheme: dark) {
		.logo {
			filter: invert(1);
		}
	}
	@media (max-width: 570px) {
		.footer-copyright {
			flex-direction: column;
		}
	}
</style>
