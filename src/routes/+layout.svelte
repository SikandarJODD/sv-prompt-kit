<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { activeElement, PressedKeys } from "runed";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { Header } from "$lib/components/landing/header";

	import { browser, dev } from "$app/environment";
	import { Agentation } from "sv-agentation";

	let { children } = $props();
	let keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		if (
			activeElement.current?.localName === "input" ||
			activeElement.current?.localName === "textarea"
		)
			return;
		toggleMode();
	});
	// let workSpaceRootPath = "S:\\sv\\comp-setup";
	$inspect(dev, "Layout component rendered");
	$inspect(browser, "Running in browser");
</script>

{#if browser && dev}
	<Agentation  />
{/if}

<ModeWatcher defaultMode="dark" />
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />

{@render children()}
