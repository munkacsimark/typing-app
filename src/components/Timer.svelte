<script lang="ts">
	import {
		faMinus,
		faPlus,
		faSyncAlt,
	} from "@fortawesome/free-solid-svg-icons";
	import {
		formatTimeData,
		getTimeDataFromTimestamp,
		hourInTimestamp,
		incrementTime,
		decrementTime,
		secondInTimestamp,
		toDaytime,
		minuteInTimestamp,
	} from "../helpers/timeCalculations";
	import type TimeData from "../TimeData";
	import Button from "./button/Button.svelte";
	import {
		baseTime,
		isTimerDone,
		isTimerRunning,
		remainingTime,
	} from "../stores";
	import { scale, fade } from "svelte/transition";
	import { locale } from "../i18n/i18n-svelte";

	const MIN_TIME = 5 * secondInTimestamp;
	const MAX_TIME = 24 * hourInTimestamp;

	let timerInterval: number;

	let timeDataToShow: TimeData;
	$: timeDataToShow = getTimeDataFromTimestamp($remainingTime);

	const isTimeValid = (timestamp: number): boolean =>
		timestamp >= MIN_TIME && timestamp <= MAX_TIME;

	const addTime = (): void => {
		let newTime: number = incrementTime($baseTime);
		if (!isTimeValid(newTime)) return;
		$baseTime = newTime;
		$remainingTime = newTime;
	};

	const subtractTime = (): void => {
		let newTime: number = decrementTime($baseTime);
		if (!isTimeValid(newTime)) return;
		$baseTime = newTime;
		$remainingTime = newTime;
	};

	const resetTime = (): void => {
		clearInterval(timerInterval);
		$baseTime = minuteInTimestamp;
		$remainingTime = minuteInTimestamp;
		$isTimerRunning = false;
		$isTimerDone = false;
	};

	locale.subscribe(resetTime);
	isTimerRunning.subscribe((isRunning) => {
		if (!isRunning) return;
		timerInterval = window.setInterval(() => {
			if ($remainingTime <= 0) {
				clearInterval(timerInterval);
				$isTimerRunning = false;
				$isTimerDone = true;
				return;
			}
			$remainingTime = $remainingTime - secondInTimestamp;
		}, 1000);
	});
	locale.subscribe((_) => resetTime());
</script>

<div class="timer-holder">
	<time datetime="{toDaytime(timeDataToShow)}" class="time">
		{formatTimeData(timeDataToShow)}
	</time>
	<div class="button-holder">
		{#if !$isTimerRunning && !$isTimerDone}
			<div in:fade out:scale>
				<Button iconData="{faMinus}" onClick="{subtractTime}" />
			</div>
		{/if}
		<Button iconData="{faSyncAlt}" onClick="{resetTime}" />
		{#if !$isTimerRunning && !$isTimerDone}
			<div in:fade out:scale>
				<Button iconData="{faPlus}" onClick="{addTime}" />
			</div>
		{/if}
	</div>
</div>

<style>
	.timer-holder {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: fit-content;
		margin: 20px auto;
		padding: 24px 48px;
		border-radius: 6px;
		border: 1px solid var(--border-color);
		color: var(--base-font-color);
	}
	.time {
		font-size: 56px;
		font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
	}
	.button-holder {
		display: flex;
		justify-content: center;
	}
</style>
