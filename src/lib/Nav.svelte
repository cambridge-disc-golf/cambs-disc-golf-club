<script>
	/** @type {"home"|"about"|"courses"} */
	export let currentPage;
	const pages = ['home', 'about', 'courses', 'first-visit'];
</script>

<nav>
	<div class="container">
		<ul class="reset">
			{#each pages as page}
				<li>
					<a
						aria-current={currentPage === page && 'page'}
						href={`/${page !== 'home' ? page : ''}`}
					>
						{page.replace('-', ' ')}</a
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
	nav a[aria-current='page'] {
		font-weight: bold;
	}
</style>
