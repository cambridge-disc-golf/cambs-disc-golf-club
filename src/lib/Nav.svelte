<script>
	/** @type {"home"|"about"|"join"|"courses"|"hall-of-fame"} */
	export let currentPage;
	const pages = ["home", "about", "join", "courses", "hall-of-fame"];
</script>

<nav>
	<div class="container">
		<ul class="reset">
			{#each pages as page}
				<li>
					<a
						aria-current={currentPage === page ? "page" : false}
						href={`/${page !== "home" ? page : ""}`}
					>
						{page.replace(/-/g, " ")}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 1;
		background-color: var(--secondary-bg-color);
		border-block-end: 1px solid var(--color);
	}
	nav ul {
		margin: 0;
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
	}
	nav ul li {
		margin-inline-end: 2ch;
		text-transform: capitalize;
	}
	nav a[aria-current="page"] {
		font-weight: bold;
	}
</style>
