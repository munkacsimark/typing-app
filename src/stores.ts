import { Writable, writable } from "svelte/store";
import type IncorrectWord from "./IncorrectWord";

const isDarkTheme: Writable<boolean> = writable(false);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);
const baseTime: Writable<number> = writable(0);
const remainingTime: Writable<number> = writable(0);
const correctCharacters: Writable<number> = writable(0);
const incorrectWords: Writable<IncorrectWord[]> = writable([]);

export {
	isDarkTheme,
	isTimerRunning,
	isTimerDone,
	baseTime,
	remainingTime,
	correctCharacters,
	incorrectWords,
};
