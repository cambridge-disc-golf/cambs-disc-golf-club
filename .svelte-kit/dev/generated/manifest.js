const c = [
	() => import("../components/layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/handicaps/index.svelte"),
	() => import("../../../src/routes/bag-tag/index.svelte"),
	() => import("../../../src/routes/holes/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	,

	,

	// src/routes/handicaps/index.svelte
	[/^\/handicaps\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/bag-tag/index.svelte
	[/^\/bag-tag\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/holes/index.svelte
	[/^\/holes\/?$/, [c[0], c[5]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];