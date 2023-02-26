<svelte:head>
	<title>Handicaps | CamDG</title>
	<meta name="description" content="Handicaps for the members of CamDG" />
</svelte:head>

<script>
	export let data;
</script>

<div class="container">
	<h1>Handicaps</h1>

	<table>
		<thead>
			<tr>
				<th>Rank</th>
				<th>Name</th>
				<th>Handicap</th>
			</tr>
		</thead>
		<tbody>
			{#each data.handicaps as { rank, name, handicap } }
				<tr>
					<td>{rank}</td>
					<td>{name}</td>
					<td>{handicap}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table td:not(:nth-of-type(2)) {
		text-align: center;
	}
</style>
