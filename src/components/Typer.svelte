<script lang="ts">
	import {
		correctCharacters,
		correctWords,
		incorrectCharacters,
		incorrectWords,
		isTimerDone,
		isTimerRunning,
	} from "../stores";
	import { getShuffledWords } from "../helpers/wordProvider";
	import LL, { locale } from "../i18n/i18n-svelte";
	import { fade } from "svelte/transition";

	const SUBMIT_CHARS = [" ", "Enter"];
	let inputFocused = false; //hack for removing placeholder on focus

	let words: string[];
	$: words = getShuffledWords($locale);

	const handleKeypress = (event: KeyboardEvent): void => {
		if (event.ctrlKey) return;
		if (!$isTimerRunning) $isTimerRunning = true;
		if (SUBMIT_CHARS.includes(event.key)) {
			event.preventDefault();
			const inputValue: string = (event.target as HTMLInputElement).value;
			if (!inputValue) return;
			(event.target as HTMLInputElement).value = "";
			if (inputValue !== words[0]) {
				$incorrectWords = $incorrectWords + 1;
				const expectedChars = Array.from(words[0]);
				const typedChars = Array.from(inputValue);
				expectedChars.forEach((expectedChar, index) => {
					if (expectedChar === typedChars[index]) {
						$correctCharacters = $correctCharacters + 1;
					} else {
						$incorrectCharacters = $incorrectCharacters + 1;
					}
				});
			} else {
				$correctWords = $correctWords + 1;
				$correctCharacters = $correctCharacters + inputValue.length;
			}
			words = words.filter((_, index) => index !== 0);
		}
	};
</script>

<div class="typer-holder">
	<div class="word-list">
		{#each words as word}
			<span class="word" transition:fade>{word}</span>
		{/each}
	</div>
	<input
		type="text"
		class="typer-input"
		placeholder="{inputFocused || $isTimerDone
			? ''
			: $LL.wordInputPlaceholder()}"
		spellcheck="false"
		autocomplete="off"
		autocapitalize="off"
		tabindex="0"
		disabled="{$isTimerDone}"
		on:keypress="{handleKeypress}"
		on:focus="{() => (inputFocused = true)}"
		on:blur="{() => (inputFocused = false)}"
	/>
</div>

<style>
	.typer-holder {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: var(--base-font-color);
		font-size: 48px;
	}
	.word-list {
		color: var(--base-font-color);
		font-size: 48px;
		transform: translateX(50%);
	}
	.typer-input {
		width: 50%;
		margin-left: auto;
		padding: 0;
		color: var(--base-font-color);
	}
	.word {
		margin-right: 20px;
	}
</style>
