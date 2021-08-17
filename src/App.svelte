<script lang="ts">
	import { initI18n } from "./i18n/i18n-svelte";
	import Theme from "./Theme";
	import { setTheme, saveTheme, getTheme } from "./helpers/themeHandler";
	import Header from "./components/Header.svelte";
	import Modal from "./components/Modal.svelte";
	import { openedModal, isDarkTheme, isTimerRunning } from "./stores";
	import Timer from "./components/Timer.svelte";

	initI18n("en");

	// initial setting of theme
	const DARK_SCHEME_MEDIA_MATCH_STRING = "(prefers-color-scheme: dark)";
	const prefersDarkScheme: boolean = window.matchMedia(
		DARK_SCHEME_MEDIA_MATCH_STRING
	).matches;
	const savedTheme: Theme = getTheme(); // undefined means theme wasn't set already
	if (savedTheme === null) {
		saveTheme(prefersDarkScheme ? Theme.dark : Theme.light);
	}
	const calculatedTheme: Theme =
		savedTheme === null || savedTheme === undefined
			? prefersDarkScheme
				? Theme.dark
				: Theme.light
			: savedTheme;
	setTheme(calculatedTheme);
	$isDarkTheme = calculatedTheme === Theme.dark;

	// Modal handling
	let isModalOpen: boolean = false;
	openedModal.subscribe((modal) => {
		isModalOpen = modal !== null;
		document.body.classList[modal === null ? "remove" : "add"]("no-scroll");
	});
</script>

<main>
	<Header />
	<Timer />
	<button on:click="{() => ($isTimerRunning = true)}">DUMMY START</button>
	<button on:click="{() => ($isTimerRunning = false)}">DUMMY STOP</button>
</main>
{#if isModalOpen}
	<Modal />
{/if}
