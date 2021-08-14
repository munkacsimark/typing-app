<script lang="ts">
	import LL, { initI18n, setLocale } from "./i18n/i18n-svelte";
	import type { Locales } from "./i18n/i18n-types";
	import Theme from "./Theme";
	import Icon from "svelte-awesome";
	import { faFlag, faLightbulb } from "@fortawesome/free-regular-svg-icons";
	import { setTheme, saveTheme, getTheme } from "./helpers/themeHandler";

	initI18n("en");
	const prefersDarkScheme = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const savedTheme = getTheme(); // undefined means theme wasn't set already
	if (savedTheme === null) {
		saveTheme(prefersDarkScheme ? Theme.dark : Theme.light);
	}
	const isDarkTheme =
		savedTheme === null || savedTheme === undefined
			? prefersDarkScheme
			: savedTheme === Theme.dark;
	setTheme(isDarkTheme ? Theme.dark : Theme.light);

	const handleThemeChange = (event: Event) => {
		const newTheme = (event.target as HTMLInputElement).checked
			? Theme.dark
			: Theme.light;
		setTheme(newTheme);
		saveTheme(newTheme);
	};

	const handleLanguageChange = (event: Event) => {
		setLocale((event.target as HTMLSelectElement).value as Locales);
	};
</script>

<main>
	<span>{$LL.themeSelector()}</span>
	<Icon data="{faLightbulb}" />
	<input
		type="checkbox"
		on:change="{handleThemeChange}"
		checked="{isDarkTheme}"
	/>
	<hr />
	<Icon data="{faFlag}" />
	<select on:change="{handleLanguageChange}">
		<option value="en">English</option>
		<option value="hu">Magyar</option>
	</select>
</main>

<style>
</style>
