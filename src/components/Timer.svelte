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
	import { isTimerDone, isTimerRunning, remainingTime } from "../stores";
	import { scale, fade } from "svelte/transition";

	const MIN_TIME = 5 * secondInTimestamp;
	const MAX_TIME = 24 * hourInTimestamp;

	let timerInterval: number;

	let timeData: TimeData;
	$: timeData = getTimeDataFromTimestamp($remainingTime);

	const isTimeValid = (timestamp: number): boolean =>
		timestamp >= MIN_TIME && timestamp <= MAX_TIME;

	const addTime = (): void => {
		let newRemainingTime: number = incrementTime($remainingTime);
		if (!isTimeValid(newRemainingTime)) return;
		$remainingTime = newRemainingTime;
	};

	const subtractTime = (): void => {
		let newRemainingTime: number = decrementTime($remainingTime);
		if (!isTimeValid(newRemainingTime)) return;
		$remainingTime = newRemainingTime;
	};

	const resetTime = (): void => {
		$isTimerRunning = false;
		$remainingTime = minuteInTimestamp;
		$isTimerDone = false;
	};

	isTimerRunning.subscribe((isRunning) => {
		if (isRunning) {
			timerInterval = window.setInterval(() => {
				if ($remainingTime <= 0) {
					$isTimerRunning = false;
					$isTimerDone = true;
					return;
				}
				$remainingTime = $remainingTime - secondInTimestamp;
			}, 1000);
		} else {
			clearInterval(timerInterval);
		}
	});
</script>

<div class="timer-holder">
	<time datetime="{toDaytime(timeData)}" class="time">
		{formatTimeData(timeData)}
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
