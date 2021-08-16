<script lang="ts">
	export let onClick: svelte.JSX.MouseEventHandler<HTMLDivElement>;
	export let switched: boolean = false;
</script>

<div class="switch-track" on:click="{onClick}">
	<div class="{`switch-thumb${switched ? ' on' : ''}`}"></div>
</div>

<style>
	.switch-track {
		--thumb-size: 18px;
		--track-padding: 2px;
		--border-width: 1px;
		padding: var(--track-padding);
		width: calc(
			2 * var(--thumb-size) + 2 * var(--track-padding) + 2 * var(--border-width)
		);
		height: calc(
			var(--thumb-size) + 2 * var(--track-padding) + 2 * var(--border-width)
		);
		border-radius: calc(
			var(--thumb-size) / 2 + var(--track-padding) + var(--border-width) * 2
		);
		border: var(--border-width) solid var(--border-color);
		background-color: var(--input-bg-color);
		cursor: pointer;
	}
	.switch-thumb {
		width: var(--thumb-size);
		height: var(--thumb-size);
		border-radius: 50%;
		border: var(--border-width) solid var(--thumb-border-color);
		background-color: var(--switch-thumb-color);
		transition: transform 0.2s;
	}
	.switch-thumb.on {
		transform: translateX(var(--thumb-size));
	}
</style>
