<script context="module">
	export async function load({ fetch }) {
		const url = `/handicaps.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					data: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let data;
</script>

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
		{#each data as { rank, name, handicap } }
			<tr>
				<td>{rank}</td>
				<td>{name}</td>
				<td>{handicap}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table td:not(:nth-of-type(2)) {
		text-align: center;
	}
</style>
