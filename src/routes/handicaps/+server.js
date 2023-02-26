import { json } from "@sveltejs/kit";

export async function GET() {
	const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRigBwYoZV5k4O6oJR8d3GHKPXqVRpnsREvSm7pwB5jUKOJ6lYNJxf_XoMFQU3K-k1MQdUXvAvZWVya/pub?gid=443736566&single=true&output=csv")
	const csvStr = await res.text();

	const rows = csvStr.split("\n");
	const [ header, ...dataRows ] = rows;
	const rowCells = dataRows.map(row => row.split(",").map(s => s.trim()));

	const initialiseOtherNames = fullName => fullName.split(" ").map((name, idx) => idx === 0 ? name : name.split("-").map(s => s[0]).join("-")).join(" ");

	return json(rowCells.map(([ rank, name, handicap ]) => ({ rank, name: initialiseOtherNames(name), handicap })));
}