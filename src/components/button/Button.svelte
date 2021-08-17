<script lang="ts">
	import type { IconDefinition } from "@fortawesome/fontawesome-common-types";
	import Icon from "svelte-awesome";
	import ButtonAppearance from "./ButtonAppearance";

	export let iconData: IconDefinition;
	export let text: string | null = null;
	export let appearance = ButtonAppearance.normal;
	export let onClick = null;

	const getClass = (): string => {
		switch (appearance) {
			case ButtonAppearance.normal:
				return ` normal${!text && " icon-only"}`;
		}
	};

	const getScale = (): number => {
		switch (appearance) {
			case ButtonAppearance.normal:
				return 1.5;
		}
	};
</script>

<button class="{`button${getClass()}`}" on:click="{onClick}">
	{#if $$slots.default}
		<slot />
	{/if}
	{#if iconData}
		<Icon data="{iconData}" scale="{getScale()}" />
	{/if}
</button>

<style>
	.button {
		--padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: var(--padding);
		background-color: transparent;
		transition: 0.2s;
	}
	.button:hover {
		background-color: var(--base-hover-bg-color);
	}
	.normal {
		font-size: 24px;
	}
	.normal.icon-only {
		border-radius: 50%;
		width: calc(24px + var(--padding) * 2);
		height: calc(24px + var(--padding) * 2);
	}
</style>
