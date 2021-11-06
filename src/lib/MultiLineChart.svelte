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
	export let width = 640; // outer width, in pixels
	export let height = 400; // outer height, in pixels
	export let xType = scaleUtc; // the x-scale type
	export let xDomain; // [xmin, xmax]
	export let xRange = [marginLeft, width - marginRight]; // [left, right]
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

	// Compute values.
	const X = map(data, xAccessor);
	const Y = map(data, yAccessor);
	const Z = map(data, zAccessor);
	const O = map(data, d => d);
	if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
	const D = map(data, defined);

	// Compute default domains, and unique the z-domain.
	if (xDomain === undefined) xDomain = extent(X);
	if (yDomain === undefined) yDomain = [0, max(Y)];
	if (zDomain === undefined) zDomain = Z;
	zDomain = new InternSet(zDomain);

	// Omit any data not present in the z-domain.
	const I = range(X.length).filter(i => zDomain.has(Z[i]));

	// Construct scales and axes.
	const xScale = xType(xDomain, xRange);
	const yScale = yType(yDomain, yRange);
	const xAxis = axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
	const yAxis = axisLeft(yScale).ticks(height / 60, yFormat);

	// Compute titles.
	const T = title === undefined ? Z : title === null ? null : map(data, title);

	// Construct a line generator.
	const lineGen = line()
		.defined(i => D[i])
		.curve(curve)
		.x(i => xScale(X[i]))
		.y(i => yScale(Y[i]));

	// x axis
	let transformXAxis = `translate(0,${height - marginBottom})`;
	let gXAxis;

	// y axis
	let transformYAxis = `translate(${marginLeft},0)`;
	let gYAxis;

	// axes
	onMount(() => {
		select(gXAxis).call(xAxis);
		select(gYAxis).call(yAxis);
	});

	// paths
	let groupMap = group(I, i => Z[i]);
	let lineGroups = Array.from(groupMap, ([key, value]) => ({ key, value }));

	// const dot = svg.append("g")
	// 	.attr("display", "none");

	// dot.append("circle")
	// 	.attr("r", 2.5);

	// dot.append("text")
	// 	.attr("font-family", "sans-serif")
	// 	.attr("font-size", 10)
	// 	.attr("text-anchor", "middle")
	// 	.attr("y", -8);


	let transformHoverGroup = null;
	let hoverText = null;
	let hoveredGroupKey = null;
	function pointermoved(event) {
		const [xm, ym] = pointer(event);
		const i = least(I, i => Math.hypot(xScale(X[i]) - xm, yScale(Y[i]) - ym)); // closest point
		hoverText = T[i];
		hoveredGroupKey = Z[i];
		transformHoverGroup = `translate(${xScale(X[i])},${yScale(Y[i]) - 5})`;
		// path.attr("stroke", ([z]) => Z[i] === z ? null : "#ddd").filter(([z]) => Z[i] === z).raise();
		// dot.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);
		// if (T) dot.select("text").text(T[i]);
		// svg.property("value", O[i]).dispatch("input", {bubbles: true});
	}

	function pointerentered() {
		// path.style("mix-blend-mode", null).attr("stroke", "#ddd");
		// dot.attr("display", null);
	}

	function pointerleft() {
		hoverText = null;
		hoveredGroupKey = null;
		// path.style("mix-blend-mode", "multiply").attr("stroke", null);
		// dot.attr("display", "none");
		// svg.node().value = null;
		// svg.dispatch("input", {bubbles: true});
	}

</script>

<figure class="c" bind:clientWidth="{width}">
	<svg
		{width} {height} viewBox="0 0 {width} {height}"
		style="max-width: 100%; height: auto; height: intrinsic;"
		on:pointermove={pointermoved}
		on:pointerenter={pointerentered}
		on:pointerleave={pointerleft}
		on:touchstart={(e) => e.preventDefault()}
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
				stroke-opacity={hoveredGroupKey !== null && hoveredGroupKey !== key ? Math.max(Math.min(strokeOpacity, 0.1), strokeOpacity - 0.6) : strokeOpacity}
			/>
		{/each}
		<g transform={transformHoverGroup}>
			{#if hoverText}<text text-anchor="middle" fill="currentColor">{hoverText}</text>{/if}
		</g>
	</svg>
</figure>
