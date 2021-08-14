<script lang="ts">
	import Theme from "./Theme";
	import Icon from "svelte-awesome";
	import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
	import { setTheme, saveTheme, getTheme } from "./helpers/themeHandler";

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
</script>

<main>
	<Icon data="{faLightbulb}" />
	<input
		type="checkbox"
		on:change="{handleThemeChange}"
		checked="{isDarkTheme}"
	/>
</main>

<style>
</style>
