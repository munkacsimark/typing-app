import { Writable, writable } from "svelte/store";
import { minuteInTimestamp } from "./helpers/timeCalculations";
import type { Locales } from "./i18n/i18n-types";
import type IncorrectWord from "./IncorrectWord";

type TimerStore = {
	baseTime: number;
	currentTime: number;
	isRunning: boolean;
	isDone: boolean;
};

const currentLocale: Writable<Locales> = writable("en"); // workaround because $locale isn't working
const isDarkTheme: Writable<boolean> = writable(false);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);
const baseTime: Writable<number> = writable(0);
const remainingTime: Writable<number> = writable(0);
const correctCharacters: Writable<number> = writable(0);
const incorrectWords: Writable<IncorrectWord[]> = writable([]);

export {
	currentLocale,
	isDarkTheme,
	isTimerRunning,
	isTimerDone,
	baseTime,
	remainingTime,
	correctCharacters,
	incorrectWords,
};
