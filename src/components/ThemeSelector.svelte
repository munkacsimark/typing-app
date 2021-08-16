<script lang="ts">
	import Icon from "svelte-awesome";
	import Theme from "../Theme";
	import { isDarkTheme } from "../stores";
	import { setTheme, saveTheme } from "../helpers/themeHandler";
	import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
	import Switch from "./Switch.svelte";
	import LL from "../i18n/i18n-svelte";

	let input: HTMLInputElement;

	const handleChange = (event: Event): void => {
		const checked = (event.target as HTMLInputElement).checked;
		const newTheme = checked ? Theme.dark : Theme.light;
		setTheme(newTheme);
		saveTheme(newTheme);
		$isDarkTheme = checked;
	};

	const handleSwitchClick = (): void => input.click();
</script>

<div class="theme-selector">
	{$LL.themeSelector()}
	<input
		type="checkbox"
		checked="{$isDarkTheme}"
		on:change="{handleChange}"
		class="hidden-input"
		bind:this="{input}"
	/>
	<div class="switch-holder">
		<Icon data="{faSun}" scale="{1.2}" style="margin-right:4px;" />
		<Switch switched="{$isDarkTheme}" onClick="{handleSwitchClick}" />
		<Icon data="{faMoon}" scale="{1.2}" style="margin-left:4px;" />
	</div>
</div>

<style>
	.theme-selector {
		display: flex;
		justify-content: space-between;
	}
	.switch-holder {
		display: flex;
		align-items: center;
	}
	.hidden-input {
		display: none;
	}
</style>
