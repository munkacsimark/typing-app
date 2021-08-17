import { Writable, writable } from "svelte/store";
import { minuteInTimestamp } from "./helpers/timeCalculations";
import type { Locales } from "./i18n/i18n-types";
import type ModalContentInfo from "./ModalContentInfo";

const currentLocale: Writable<Locales> = writable("en"); // workaround because $locale isn't working
const openedModal: Writable<ModalContentInfo | null> = writable(null);
const isDarkTheme: Writable<boolean> = writable(false);
const remainingTime: Writable<number> = writable(minuteInTimestamp);
const isTimerRunning: Writable<boolean> = writable(false);
const isTimerDone: Writable<boolean> = writable(false);

export {
	currentLocale,
	openedModal,
	isDarkTheme,
	remainingTime,
	isTimerRunning,
	isTimerDone,
};
