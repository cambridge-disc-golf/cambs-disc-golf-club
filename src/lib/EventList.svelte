<script>
	// TODO: jsdoc for return type of this fn
	async function getEvents() {
		const res = await fetch('/events');
		const events = await res.json();

		const parsedEvents = events.map(x => {
			/** @type {import("./types").Event} */
			const event = x;
			return {
				...event,
				displayDate: new Intl.DateTimeFormat(undefined, { weekday: "short", day: "2-digit", month: "short" }).format(new Date(event.startDate)),
				displayStart: event.startTime && new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(event.startTime)),
				displayEnd: event.endTime && new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" }).format(new Date(event.endTime)),
				allDay: event.startTime === undefined,
			};
		});

		return {
			upcoming: parsedEvents.slice(0, 3),
			future: parsedEvents.slice(3).filter(ev => !ev.isRecurring),
		};
	}
	const eventsPromise = getEvents();
</script>

<h2 id="events">Events</h2>
<p class="prose">
	<span>Let us know if you're planning on coming to an event <a href="https://www.facebook.com/groups/115658245890790">facebook group</a>.</span>
	<span>Subscribe to events on our <a href="https://calendar.google.com/calendar/u/1?cid=ZGlzY2dvbGZjYW1icmlkZ2VAZ21haWwuY29t">google calendar</a></span>
</p>
{#await eventsPromise}
	<p>Loading...</p>
{:then data}
	<h3>Upcoming</h3>
	{#if data.upcoming.length}
		<ul class="reset event-list">
			{#each data.upcoming as event}
				<li>
					<div class="event-header">
						<span class="ev-date">{event.displayDate}</span>
						<p class="ev-title heading">{event.title}</p>
						<em class="ev-time">{event.allDay ? "All day" : `${event.displayStart} - ${event.displayEnd}`}</em>
					</div>

					{#if !event.isRecurring && event.description}<p class="ev-desc">{@html event.description}</p>{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<p>None scheduled</p>	
	{/if}
	{#if data.future.length}
		<h3>Later</h3>
		<ul class="reset event-list future-events">
			{#each data.future as event}
				<li>
					<div class="event-header">
						<span class="ev-date">{event.displayDate}</span>
						<p class="ev-title heading">{event.title}</p>
						<em class="ev-time">{event.allDay ? "All day" : `${event.displayStart} - ${event.displayEnd}`}</em>
					</div>

					{#if event.description}<p class="ev-desc">{@html event.description}</p>{/if}
				</li>
			{/each}
		</ul>
	{/if}
{/await}

<style>
	h3 {
		margin-block-start: 2rem;
	}
	.event-list {
		margin-block: 0;
	}
	.event-list li {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: "date time" "title title" "desc desc";
		align-items: center;
		column-gap: 0.5rem;
		
		padding: 1rem;
		padding-inline: 0;
	}
	.event-list li + li {
		border-block-start: 1px solid var(--secondary-bg-color);
	}
	.event-list li:last-child {
		padding-block-end: 0;
	}
	.event-header {
		display: contents;
	}
	.ev-date { grid-area: date }
	.ev-title { grid-area: title }
	.ev-time { grid-area: time }
	.ev-desc {
		grid-area: desc;
		margin: 0;
		margin-block-start: 0.5rem;
	}

	@media (min-width: 30rem) {
		.event-list li {
			grid-template-columns: 7rem 1fr 7rem;
			grid-template-areas: "date title time" ". desc desc";
			padding-inline: 1rem;
		}
		.ev-date,
		.ev-time {
			text-align: center;
		}
	}
</style>
