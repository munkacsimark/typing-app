import { Writable, writable } from "svelte/store";
const isDarkTheme: Writable<boolean> = writable(false);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);
const baseTime: Writable<number> = writable(0);
const remainingTime: Writable<number> = writable(0);
const correctCharacters: Writable<number> = writable(0);
const incorrectCharacters: Writable<number> = writable(0);
const correctWords: Writable<number> = writable(0);
const incorrectWords: Writable<number> = writable(0);
const wordInputValue: Writable<string> = writable("");

export {
	isDarkTheme,
	isTimerRunning,
	isTimerDone,
	baseTime,
	remainingTime,
	correctCharacters,
	incorrectCharacters,
	correctWords,
	incorrectWords,
	wordInputValue,
};
