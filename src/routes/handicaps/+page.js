import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
    const url = `/handicaps`;
    const res = await fetch(url);

    if (res.ok) {
        return {
            handicaps: await res.json(),
        };
    }

    return error(res.status);
}
