<script lang="ts">
	import { getTimeInMinutes } from "../helpers/timeCalculations";
	import LL from "../i18n/i18n-svelte";

	import {
		baseTime,
		correctCharacters,
		correctWords,
		incorrectCharacters,
		incorrectWords,
		remainingTime,
	} from "../stores";

	// CPM: The amount of correct characters typed, divided by the test duration in minutes.
	// WPM: Words per minute, CPM divided by 5.
	$: cpm = $correctCharacters / getTimeInMinutes($baseTime - $remainingTime);
	$: wpm = cpm / 5;
	$: characterAccuracy =
		$correctCharacters / ($correctCharacters + $incorrectCharacters);
	$: wordAccuraccy = $correctWords / ($correctWords + $incorrectWords);

	const toFixedPercent = (value: number): string =>
		`${(value * 100).toFixed(2)}%`;
</script>

<div class="results-holder">
	<div class="row big-row">
		<span class="name">WPM:</span>
		<span class="value">{Math.round(wpm) || 0}</span>
	</div>
	<div class="row">
		<span class="name">{$LL.characterAccuracy()}:</span>
		<span class="value">{toFixedPercent(characterAccuracy || 0)}</span>
	</div>
	<div class="row">
		<span class="name">{$LL.wordAccuraccy()}:</span>
		<span class="value">{toFixedPercent(wordAccuraccy || 0)}</span>
	</div>
	<div class="row">
		<span class="name">{$LL.incorrectWords()}:</span>
		<span class="value">{$incorrectWords}</span>
	</div>
</div>

<style>
	.results-holder {
		display: flex;
		flex-direction: column;
		width: fit-content;
		margin: 20px auto 0 auto;
		padding: 24px 48px;
		border-radius: 6px;
		border: 1px solid var(--border-color);
		color: var(--base-font-color);
	}
	.row {
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		border-bottom: 1px solid var(--border-color);
		padding: 10px;
	}
	.row:last-child {
		border-bottom: none;
	}
	.big-row {
		font-size: 30px;
	}
	.name {
		font-weight: bold;
	}
	.value {
		margin-left: 10px;
	}
</style>
