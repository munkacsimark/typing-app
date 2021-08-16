<script lang="ts">
	import { faCog } from "@fortawesome/free-solid-svg-icons";
	import Button from "./button/Button.svelte";
	import { openedModal } from "../stores";
	import SettingsModal from "./modals/SettingsModal.svelte";

	const handleOpenSettingsModal = (): void => {
		$openedModal = {
			translationFunctionName: "modalTitleSettings",
			component: SettingsModal,
		};
	};
</script>

<div class="header">
	<h1>Typing app</h1>
	<Button iconData="{faCog}" onClick="{handleOpenSettingsModal}" />
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
