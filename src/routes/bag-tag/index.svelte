<script context="module">
	export async function load({ fetch }) {
		const url = `/bag-tag-standings.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					data: await res.json(),
				},
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		};
	}
</script>

<script>
	export let data;

	const previousStandings = data[data.length - 2]?.standings || [];
	const latestWeekStandings = data[data.length - 1].standings;

	const initialiseOtherNames = (fullName) =>
		fullName
			.split(' ')
			.map((name, idx) =>
				idx === 0
					? name
					: name
							.split('-')
							.map((s) => s[0])
							.join('-')
			)
			.join(' ');

	function getPersonData(person, currentPlacing) {
		const previousIndex = previousStandings.findIndex(
			(name) => name === person
		);
		const previousPlacing = previousIndex + 1;

		const toReturn = {
			name: initialiseOtherNames(person),
		};

		if (person === '-') {
			// ignore
		} else if (previousPlacing < 1) {
			toReturn.tag = 'New';
			toReturn.tagType = 'new';
		} else if (previousPlacing < currentPlacing) {
			toReturn.tag = `▼ ${currentPlacing - previousPlacing}`;
			toReturn.tagType = 'down';
		} else if (previousPlacing > currentPlacing) {
			toReturn.tag = `▲ ${previousPlacing - currentPlacing}`;
			toReturn.tagType = 'up';
		}

		return toReturn;
	}

	let currentPlacing = 1;
	export const podiumData = [];
	for (const person of latestWeekStandings.slice(0, 3)) {
		podiumData.push(getPersonData(person, currentPlacing++));
	}

	export const remainingData = [];
	for (const person of latestWeekStandings.slice(3)) {
		remainingData.push(getPersonData(person, currentPlacing++));
	}
</script>

<div class="container">
	<h1>
		<span>Bag Tag Standings</span>
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			style="width: 1.5rem; height: 1.5rem"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
				clip-rule="evenodd"
			/>
		</svg>
	</h1>

	<ol class="podium">
		{#each podiumData as data}
			<li>
				<span>{data.name}</span>
				{#if data.tag}<span class="tag" data-type={data.tagType}
						>{data.tag}</span
					>{/if}
			</li>
		{/each}
	</ol>

	<ol start="4">
		{#each remainingData as data}
			<li>
				<span>{data.name}</span>
				{#if data.tag}<span class="tag" data-type={data.tagType}
						>{data.tag}</span
					>{/if}
			</li>
		{/each}
	</ol>
</div>

<style>
	.podium {
		display: flex;
		align-items: flex-end;
	}
	.podium li {
		text-align: center;
	}
	.podium li::after {
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 0.5rem;
		width: 100px;
		height: var(--height);
		margin: 0 auto;
		background-color: var(--secondary-bg-color);
	}

	.podium li:nth-of-type(1) {
		order: 2;
		font-size: 1.5rem;
	}
	.podium li:nth-of-type(1)::after {
		content: '1st';
		height: 4.5rem;
	}
	.podium li:nth-of-type(2) {
		order: 1;
		font-size: 1.2rem;
	}
	.podium li:nth-of-type(2)::after {
		content: '2nd';
		height: 3rem;
	}
	.podium li:nth-of-type(3) {
		order: 3;
		font-size: 1rem;
	}
	.podium li:nth-of-type(3)::after {
		content: '3rd';
		height: 1.5rem;
	}

	ol {
		line-height: 2;
	}

	.tag:not(:empty) {
		background-color: var(--secondary-bg-color);
		margin: 0.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 2px;
	}
</style>
