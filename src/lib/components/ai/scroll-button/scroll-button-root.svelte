<script lang="ts">
	import { watch } from "runed";
	import { cn } from "$lib/utils";
	import {
		setScrollButtonContext,
		type ScrollButtonAnimation,
		type ScrollButtonInitialAnimation
	} from "./context.svelte.js";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		children,
		class: className,
		resize = "smooth",
		initial = "instant",
		...rest
	}: {
		ref?: HTMLDivElement | null;
		children?: import("svelte").Snippet;
		class?: string;
		resize?: ScrollButtonAnimation;
		initial?: ScrollButtonInitialAnimation;
		[key: string]: any;
	} = $props();

	const context = setScrollButtonContext();

	function bindScrollElement(node: HTMLDivElement) {
		ref = node;
		context.setScrollElement(node);

		return () => {
			ref = null;
			context.setScrollElement(null);
		};
	}

	watch(
		() => resize,
		() => {
			context.updateResize(resize);
		}
	);

	watch(
		() => initial,
		() => {
			context.updateInitial(initial);
		}
	);
</script>

<div
	{@attach bindScrollElement}
	class={cn("relative flex overflow-y-auto", className)}
	{...rest}
>
	{@render children?.()}
</div>
