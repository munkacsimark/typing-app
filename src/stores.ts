import { Writable, writable } from "svelte/store";
import { minuteInTimestamp } from "./helpers/timeCalculations";
import type ModalContentInfo from "./ModalContentInfo";

const openedModal: Writable<ModalContentInfo | null> = writable(null);
const isDarkTheme: Writable<boolean> = writable(false);
const remainingTime: Writable<number> = writable(minuteInTimestamp);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);

export {
	openedModal,
	isDarkTheme,
	remainingTime,
	isTimerRunning,
	isTimerDone,
};
