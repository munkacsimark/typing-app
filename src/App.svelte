<script lang="ts">
	import LL, { initI18n } from "./i18n/i18n-svelte";
	import Theme from "./Theme";
	import { setTheme, saveTheme, getTheme } from "./helpers/themeHandler";
	import Header from "./components/Header.svelte";
	import Modal from "./components/Modal.svelte";
	import {
		baseTime,
		isDarkTheme,
		isTimerRunning,
		remainingTime,
		correctCharacters,
		incorrectWords,
		isTimerDone,
	} from "./stores";
	import Timer from "./components/Timer.svelte";
	import Typer from "./components/Typer.svelte";
	import SettingsModal from "./components/modals/SettingsModal.svelte";

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
	let NO_SCROLL_CLASS = "no-scroll";
	let isModalOpen: boolean;
	let modalTitleTranslationFunction: string; // hack to make dynamic langauge change work
	let openedModalComponent: any;

	const handleModalOpen = (
		titleTranslationFunction: string,
		component: any
	): void => {
		isModalOpen = true;
		modalTitleTranslationFunction = titleTranslationFunction;
		openedModalComponent = component;
		document.body.classList.add(NO_SCROLL_CLASS);
	};

	const handleModalClose = (): void => {
		isModalOpen = false;
		// don't reset title and component here
		// to let animation run correctly
		document.body.classList.remove(NO_SCROLL_CLASS);
	};

	// reset store on fresh run
	isTimerRunning.subscribe((isRunning) => {
		if (!isRunning) return;
		$remainingTime = $baseTime;
		$correctCharacters = 0;
		$incorrectWords = [];
	});

	// handle timer done
	isTimerDone.subscribe((isDone) => {
		if (!isDone) return;
		console.log("TIMER DONE");
		console.log($correctCharacters);
		console.log($incorrectWords);
	});
</script>

<main>
	<Header
		on:settingsOpen="{() => {
			handleModalOpen('modalTitleSettings', SettingsModal);
		}}"
	/>
	<Timer />
	<Typer />
</main>
<Modal
	isOpen="{isModalOpen}"
	title="{$LL[modalTitleTranslationFunction]()}"
	on:close="{handleModalClose}"
>
	<svelte:component this="{openedModalComponent}" />
</Modal>
