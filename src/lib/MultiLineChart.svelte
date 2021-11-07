<script>
	// Code adapted from MultiLineChart by Observable, Inc (ISC License):
	// https://observablehq.com/@d3/multi-line-chart

	import { onMount } from 'svelte';

	import {
		axisBottom,
		axisLeft,
		create,
		curveLinear,
		extent,
		group,
		InternSet,
		least,
		line,
		map,
		max,
		range,
		pointer,
		scaleUtc,
		scaleLinear,
		select,
	} from "d3";

	export let data = [];

	export let xAccessor = d => d[0]; // given d in data, returns the (temporal) x-value
	export let yAccessor = d => d[1]; // given d in data, returns the (quantitative) y-value
	export let zAccessor = () => 1; // given d in data, returns the (categorical) z-value
	export let title; // given d in data, returns the title text
	export let defined; // for gaps in data
	export let curve = curveLinear; // method of interpolation between points
	export let marginTop = 20; // top margin, in pixels
	export let marginRight = 30; // right margin, in pixels
	export let marginBottom = 30; // bottom margin, in pixels
	export let marginLeft = 40; // left margin, in pixels
	let width = 1200; // outer width, in pixels
	export let height = 400; // outer height, in pixels
	export let xType = scaleUtc; // the x-scale type
	export let xDomain; // [xmin, xmax]
	export let xRange; // [left, right]
	export let yType = scaleLinear; // the y-scale type
	export let yDomain; // [ymin, ymax]
	export let yRange = [height - marginBottom, marginTop]; // [bottom, top]
	export let yFormat; // a format specifier string for the y-axis
	export let yLabel; // a label for the y-axis
	export let zDomain; // array of z-values
	export let zColorAccessor = (key) => "currentColor"; // given result of zAccessor, returns the colour for the series
	export let strokeLinecap = "round"; // stroke line cap of the line
	export let strokeLinejoin = "round"; // stroke line join of the line
	export let strokeWidth = 1.5; // stroke width of line, in pixels
	export let strokeOpacity = 1; // stroke opacity of line
	export let showLastSeriesTitle = false; // whether to display the last title for each series at the end of the series path

	// Compute values.
	const X = map(data, xAccessor);
	const Y = map(data, yAccessor);
	const Z = map(data, zAccessor);
	const O = map(data, d => d);
	if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
	const D = map(data, defined);

	let initialXRange = xRange;
	$: {
		if (initialXRange === undefined) {
			xRange = [marginLeft, width - marginRight];
		}
	}

	// Compute default domains, and unique the z-domain.
	if (xDomain === undefined) xDomain = extent(X);
	if (yDomain === undefined) yDomain = [0, max(Y)];
	if (zDomain === undefined) zDomain = Z;
	zDomain = new InternSet(zDomain);

	// Omit any data not present in the z-domain.
	const I = range(X.length).filter(i => zDomain.has(Z[i]));

	// Construct scales and axes.
	$: xScale = xType(xDomain, xRange);
	const yScale = yType(yDomain, yRange);
	$: xAxis = axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
	const yAxis = axisLeft(yScale).ticks(height / 60, yFormat);

	// Compute titles.
	const T = title === undefined ? Z : title === null ? null : map(data, title);

	// Construct a line generator.
	$: lineGen = line()
		.defined(i => D[i])
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(Y[i]));

	// x axis
	let transformXAxis = `translate(0,${height - marginBottom})`;
	let gXAxis;
	$: select(gXAxis).call(xAxis);

	// y axis
	let transformYAxis = `translate(${marginLeft},0)`;
	let gYAxis;
	onMount(() => {
		select(gYAxis).call(yAxis);
	});

	// paths
	let groupMap = group(I, i => Z[i]);
	let lineGroups = Array.from(groupMap, ([key, value]) => ({ key, value }));

	let transformHoverGroup = null;
	let highlightedGroupKey = null;
	function mousemoved(event) {
		const [xm, ym] = pointer(event);
		const i = least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
		highlightedGroupKey = Z[i];
		transformHoverGroup = `translate(${xScale(X[i])},${yScale(Y[i]) - 5})`;
	}

	function mouseleft() {
		highlightedGroupKey = null;
	}
</script>

<figure class="m-0" bind:clientWidth="{width}">
	<svg
		{width} {height} viewBox="0 0 {width} {height}"
		style="max-width: 100%; height: auto; height: intrinsic;"
		on:mousemove={mousemoved}
		on:mouseleave={mouseleft}
	>
		<g class="axis" bind:this={gXAxis} transform="{transformXAxis}" />
		<g class="axis" bind:this={gYAxis} transform="{transformYAxis}">
			{#if yLabel}<text x={-marginLeft} y={10} fill="currentColor" text-anchor="start">{yLabel}</text>{/if}
		</g>
		{#each lineGroups as { key, value }}
			<path
				d={lineGen(value)}
				fill="none"
				stroke={zColorAccessor(key)}
				stroke-linecap={strokeLinecap}
				stroke-linejoin={strokeLinejoin}
				stroke-width={strokeWidth}
				stroke-opacity={highlightedGroupKey !== null && highlightedGroupKey !== key ? Math.max(Math.min(strokeOpacity, 0.1), strokeOpacity - 0.6) : strokeOpacity}
			/>
			{#if showLastSeriesTitle}
				<text
					text-anchor="left"
					fill="currentColor"
					transform="translate({xScale(X[value[value.length - 1]]) + 5},{yScale(Y[value[value.length - 1]]) + 4}) scale(0.8)"
				>{T[value[value.length - 1]]}</text>
			{/if}
		{/each}
	</svg>
</figure>
