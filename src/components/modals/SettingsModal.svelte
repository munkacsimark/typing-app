<script lang="ts">
	import LanguageSelector from "../LanguageSelector.svelte";
	import ThemeSelector from "../ThemeSelector.svelte";

	const rows = [ThemeSelector, LanguageSelector];
</script>

{#each rows as row}
	<div class="row">
		<svelte:component this="{row}" />
	</div>
{/each}

<style>
	.row {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 10px 0;
		min-height: 60px;
		border-bottom: 1px solid var(--border-color);
	}
	.row:last-child {
		border-bottom: none;
	}
</style>
