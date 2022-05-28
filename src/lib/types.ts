export interface Event {
	id: string;
	title: string;
	description: string;
	startDate: string;
	startTime?: string;
	endDate: string;
	endTime?: string;
	location: string;
	isRecurring: boolean;
}

export interface HoleInfo {
	hole: number;
	distance: number;
	par: number;
	description: string;
}
