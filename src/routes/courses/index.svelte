<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<script>
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav currentPage="courses" />

<main class="container">
	<h1>Courses</h1>

	<picture>
		<source src="/course.avif" type="image/avif" />
		<source src="/course.webp" type="image/webp" />
		<source src="/course.gif" type="image/gif" />
		<img src="/course.png" alt="Map of the Papworth Disc Golf Course Layout" />
	</picture>

	<table>
		<thead>
			<tr>
				<td>Hole</td>
				<td class="nowrap">Dist. (m)</td>
				<td>Par</td>
				<td>Notes</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>71</td>
				<td>3</td>
				<td
					>Slightly uphill, with a double mando' between the two silver birch
					trees, the basket is behind the shrub at end of left hand path.
					Dropzone between the trees if you miss the mando'.</td
				>
			</tr>
			<tr>
				<td>2</td>
				<td>66</td>
				<td>3</td>
				<td
					>Trees on the left make this a dogleg left with the basket about 15m
					behind the second left tree</td
				>
			</tr>
			<tr>
				<td>3</td>
				<td>57</td>
				<td>3</td>
				<td>A slight downhill with two trees narrowing the fairway.</td>
			</tr>
			<tr>
				<td>4</td>
				<td>56</td>
				<td>3</td>
				<td
					>Downhill with no height restriction off the tee. Two large grabby
					pine trees either side of fairway guard the small level green, with
					the basket a few metres to the right of the large centre tree at the
					end of the fairway</td
				>
			</tr>
			<tr>
				<td>5</td>
				<td>73</td>
				<td>3</td>
				<td
					>A straight downhill hole with the road along the right hand tree line
					out of bounds.</td
				>
			</tr>
			<tr>
				<td>6</td>
				<td>45</td>
				<td>3</td>
				<td
					>A short hole which still requires an accurate shot past a super
					grabby pine tree only 5 to 6 metres to the right off the tee.</td
				>
			</tr>
			<tr>
				<td>7</td>
				<td>95</td>
				<td>3</td>
				<td
					>A dogleg right off the tee with a mando' tree on the right preventing
					cutting the corner.</td
				>
			</tr>
			<tr>
				<td>8</td>
				<td>71</td>
				<td>3</td>
				<td
					>Fresh from the 'up,down dogleg' hole 7 we have hole 8 with an
					imposing mando' formed by the huge bough of a pine tree a few metres
					from the tee.</td
				>
			</tr>
			<tr>
				<td>9</td>
				<td>68</td>
				<td>3</td>
				<td
					>This hole brings the OB road on the left and low limbed trees on the
					right into play.</td
				>
			</tr>
			<tr>
				<td>10</td>
				<td>87</td>
				<td>3</td>
				<td
					>Start of back 9 on a flat hole with a fairway which is narrowed to 5
					or 6m gap by a large patch of shrubbery left, and a tree on right.</td
				>
			</tr>
			<tr>
				<td>11</td>
				<td>73</td>
				<td>3</td>
				<td
					>A downhill hole with the basket located in the 'jail' copse of three
					small trees located centre/left in photo at the end of the fairway.</td
				>
			</tr>
			<tr>
				<td>12</td>
				<td>41</td>
				<td>3</td>
				<td
					>A short hole teeing from the grass for a few metres into a tunnel
					formed by shrubs and trees. The basket is off set left by a few metres
					at the end of the tunnel close to a felled pine tree.</td
				>
			</tr>
			<tr>
				<td>13</td>
				<td>53</td>
				<td>3</td>
				<td
					>The tunnel theme continues with a longer shot this time, before
					reaching a tunnel with a slightly wider gap than on the previous hole.
					The basket is visible from the tee on this one.</td
				>
			</tr>
			<tr>
				<td>14</td>
				<td>124</td>
				<td>4</td>
				<td
					>The last of 3 tunnel holes in a row is one of the hardest on the
					course. It begins in the tunnel and requires low, straight shots to
					cover the 95 or so metres to the end of the tunnel which opens up
					towards the exit. Anything left or right often leaves difficult shots
					back on to fairway with still a good distance to the hole. The basket
					is a further 30 ish metres on the grass in front, completely
					unobstructed.</td
				>
			</tr>
			<tr>
				<td>15</td>
				<td>70</td>
				<td>3</td>
				<td
					>Affectionately named "Old Stumpy" due to the raised basket placed on
					an old tree stump. An uphill hole with a narrow gap between two large
					pine trees.</td
				>
			</tr>
			<tr>
				<td>16</td>
				<td>118</td>
				<td>4</td>
				<td
					>A long hole (for Papworth) running downhill parallel with the OB road
					left.</td
				>
			</tr>
			<tr>
				<td>17</td>
				<td>71</td>
				<td>3</td>
				<td
					>A slightly undulating hole rising from tee to the tree lined
					road.('river' OB)</td
				>
			</tr>
			<tr>
				<td>18</td>
				<td>85</td>
				<td>3</td>
				<td>The last but not least of the downhill stretch to finish.</td>
			</tr>
		</tbody>
	</table>
</main>

<Footer />

<style>
	table thead,
	table tbody td:not(:last-of-type) {
		text-align: center;
	}

	@media (max-width: 33rem) {
		table thead {
			display: none;
		}
		table tbody tr {
			display: grid;
			grid-template-areas: 'hole dist par' 'notes notes notes';
			padding: 0.4rem 0.2rem;
		}

		table tbody td:nth-of-type(1) {
			grid-area: hole;
		}
		table tbody td:nth-of-type(2) {
			grid-area: dist;
		}
		table tbody td:nth-of-type(3) {
			grid-area: par;
		}
		table tbody td:nth-of-type(4) {
			grid-area: notes;
		}

		table tbody td::before {
			font-weight: bold;
		}

		table tbody td:nth-of-type(1)::before {
			content: 'Hole ';
		}
		table tbody td:nth-of-type(2)::after {
			content: 'm';
		}
		table tbody td:nth-of-type(3)::before {
			content: 'Par ';
		}
		table tbody td:nth-of-type(4)::before {
			content: 'Notes: ';
		}
	}
</style>
