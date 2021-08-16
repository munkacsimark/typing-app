import { Writable, writable } from "svelte/store";
import type ModalContentInfo from "./ModalContentInfo";

const openedModal: Writable<ModalContentInfo | null> = writable(null);
const isDarkTheme: Writable<boolean> = writable(false);

export { openedModal, isDarkTheme };
