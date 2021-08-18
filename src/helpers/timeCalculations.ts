import type TimeData from "../TimeData";

const secondInTimestamp: number = 1;
const minuteInTimestamp: number = 60;
const hourInTimestamp: number = 3600;

const getTimeDataFromTimestamp = (timestamp: number): TimeData => {
	const seconds: number = timestamp % minuteInTimestamp;
	const minutes: number =
		((timestamp - seconds) % hourInTimestamp) / minuteInTimestamp;
	const hours: number =
		(timestamp - minutes * minuteInTimestamp - seconds) / hourInTimestamp;
	return { seconds, minutes, hours };
};

const getTimeInMinutes = (timestamp: number): number =>
	timestamp / minuteInTimestamp;

const toDaytime = ({ hours, minutes, seconds }: TimeData): string =>
	`PT${hours}H${minutes}M${seconds}S`;

const formatTimeData = ({ hours, minutes, seconds }: TimeData): string => {
	const pad = (timestamp: number): string =>
		timestamp.toString().padStart(2, "0");

	return `${hours > 0 ? pad(hours) + ":" : ""}${pad(minutes)}:${pad(seconds)}`;
};

const incrementTime = (currentTimestamp: number): number => {
	if (currentTimestamp < minuteInTimestamp)
		return currentTimestamp + 5 * secondInTimestamp;
	if (currentTimestamp < 5 * minuteInTimestamp)
		return currentTimestamp + 15 * secondInTimestamp;
	if (currentTimestamp < 10 * minuteInTimestamp)
		return currentTimestamp + minuteInTimestamp;
	if (currentTimestamp < 1 * hourInTimestamp)
		return currentTimestamp + 5 * minuteInTimestamp;
	if (currentTimestamp < 3 * hourInTimestamp)
		return currentTimestamp + 30 * minuteInTimestamp;
	return currentTimestamp + hourInTimestamp;
};

const decrementTime = (currentTimestamp: number): number => {
	if (currentTimestamp <= minuteInTimestamp)
		return currentTimestamp - 5 * secondInTimestamp;
	if (currentTimestamp <= 5 * minuteInTimestamp)
		return currentTimestamp - 15 * secondInTimestamp;
	if (currentTimestamp <= 10 * minuteInTimestamp)
		return currentTimestamp - minuteInTimestamp;
	if (currentTimestamp <= 1 * hourInTimestamp)
		return currentTimestamp - 5 * minuteInTimestamp;
	if (currentTimestamp <= 3 * hourInTimestamp)
		return currentTimestamp - 30 * minuteInTimestamp;
	return currentTimestamp - hourInTimestamp;
};

export {
	secondInTimestamp,
	minuteInTimestamp,
	hourInTimestamp,
	getTimeDataFromTimestamp,
	getTimeInMinutes,
	toDaytime,
	formatTimeData,
	incrementTime,
	decrementTime,
};
