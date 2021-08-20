<script lang="ts">
	import LL, { locale, setLocale } from "../i18n/i18n-svelte";
	import type { Locales } from "../i18n/i18n-types";

	const handleLanguageChange = (event: Event) =>
		setLocale((event.target as HTMLSelectElement).value as Locales);
</script>

<div class="language-selector">
	{$LL.languageSelector()}
	<select
		on:change="{handleLanguageChange}"
		value="{$locale}"
		class="select"
	>
		<option value="en">English</option>
		<option value="hu">Magyar</option>
	</select>
</div>

<style>
	.language-selector {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.select {
		color: var(--base-font-color);
		margin: 0;
	}
</style>
