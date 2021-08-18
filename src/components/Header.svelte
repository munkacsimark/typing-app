<script lang="ts">
	import { faCog } from "@fortawesome/free-solid-svg-icons";
	import Button from "./button/Button.svelte";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	const handleClick = (): void => dispatch("settingsOpen");
</script>

<div class="header">
	<h1>Typing app</h1>
	<Button iconData="{faCog}" onClick="{handleClick}" />
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 5px 20px;
		color: var(--base-font-color);
	}
</style>
