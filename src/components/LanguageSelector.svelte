<script lang="ts">
	import LL, { locale, setLocale } from "../i18n/i18n-svelte";
	import type { Locales } from "../i18n/i18n-types";

	let selectedLocale: Locales;

	const handleLanguageChange = (event: Event) =>
		setLocale((event.target as HTMLSelectElement).value as Locales);

	locale.subscribe((newLocale) => (selectedLocale = newLocale));
</script>

<div class="language-selector">
	{$LL.languageSelector()}
	<select
		on:change="{handleLanguageChange}"
		value="{selectedLocale}"
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
