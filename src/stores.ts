import { Writable, writable } from "svelte/store";
import type { Locales } from "./i18n/i18n-types";

const currentLocale: Writable<Locales> = writable("en"); // workaround because $locale isn't working
const isDarkTheme: Writable<boolean> = writable(false);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);
const baseTime: Writable<number> = writable(0);
const remainingTime: Writable<number> = writable(0);
const correctCharacters: Writable<number> = writable(0);
const incorrectCharacters: Writable<number> = writable(0);
const correctWords: Writable<number> = writable(0);
const incorrectWords: Writable<number> = writable(0);

export {
	currentLocale,
	isDarkTheme,
	isTimerRunning,
	isTimerDone,
	baseTime,
	remainingTime,
	correctCharacters,
	incorrectCharacters,
	correctWords,
	incorrectWords,
};
