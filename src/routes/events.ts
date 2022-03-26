import type { Event } from "../lib/types";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	// @ts-ignore
	const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
	const calendarId = "discgolfcambridge@gmail.com";

	const events = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${new Date().toISOString()}&singleEvents=true&orderBy=startTime`);
	const data = await events.json();

	if (data.items) {
		const events: Event[] = data.items.map(item => ({
			id: item.id,
			title: item.summary,
			description: item.description,
			startDate: item.start.date || item.start.dateTime?.slice(0, "YYYY-MM-DD".length),
			startTime: item.start.dateTime,
			endDate: item.end.date || item.end.dateTime?.slice(0, "YYYY-MM-DD".length),
			endTime: item.end.dateTime,
			location: item.location,
			isRecurring: item.recurringEventId !== undefined,
		}));

		return {
			body: events,
		}
	}

	return {
		status: 500,
	};
}
