
export async function get() {
	const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRigBwYoZV5k4O6oJR8d3GHKPXqVRpnsREvSm7pwB5jUKOJ6lYNJxf_XoMFQU3K-k1MQdUXvAvZWVya/pub?gid=0&single=true&output=csv")
	const csvStr = await res.text();

	const rows = csvStr.split("\n");
	const rowCells = rows.map(row => row.split(","));
	const [ header, ...data ] = rowCells;

	const weeklyStandings = data
		.map((cells) => {
			return {
				date: cells[0],
				standings: cells.slice(1).map(str => str.trim()),
			};
		});

	return {
		body: weeklyStandings,
	};
}