import type { Event } from "../lib/types";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	// @ts-ignore
	const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
	const calendarId = "467d2i4cnc7k8dpqmqla8r7r5k@group.calendar.google.com";

	const now = new Date();
	const sixMonthsFromNow = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
	const events = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${now.toISOString()}&timeMax=${sixMonthsFromNow.toISOString()}&singleEvents=true&orderBy=startTime`);
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
		};
	}

	return {
		status: 500,
	};
}
