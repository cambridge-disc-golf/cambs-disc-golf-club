export async function load({ fetch }) {
    const url = `/courses/starter-info`;
    const res = await fetch(url);

    if (res.ok) {
        return {
            holeInfo: await res.json(),
        };
    }

    return {
        status: res.status,
        error: new Error(`Could not load ${url}`),
    };
}
