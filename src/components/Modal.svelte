<script lang="ts">
	import { faTimes } from "@fortawesome/free-solid-svg-icons";
	import Button from "./button/Button.svelte";
	import { scale, fade } from "svelte/transition";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	export let isOpen: boolean = false;
	export let title: string = "";

	const closeModal = (): void => dispatch("close");
</script>

{#if isOpen}
	<div class="modal-holder">
		<div class="fader" on:click="{closeModal}" transition:fade></div>
		<div class="modal" transition:scale>
			<header class="modal-header">
				{title}
				<Button iconData="{faTimes}" onClick="{closeModal}" />
			</header>
			<div class="modal-content">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-holder {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fader {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--fader-color);
		z-index: 1;
	}
	.modal {
		border-radius: 6px;
		background-color: var(--modal-bg-color);
		z-index: 2;
		color: var(--base-font-color);
	}
	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		min-width: 300px;
		padding: 10px;
		font-size: 24px;
		border-bottom: 1px solid var(--border-color);
	}
	.modal-content {
		padding: 10px;
		font-size: 18px;
	}
</style>
