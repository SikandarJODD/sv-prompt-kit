<script lang="ts">
	import { watch } from "runed";
	import { cn } from "$lib/utils";
	import {
		setChatContainerContext,
		type ChatContainerAnimation,
		type ChatContainerInitialAnimation
	} from "./context.svelte.js";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		children,
		class: className,
		resize = "smooth",
		initial = "instant",
		...restProps
	}: {
		ref?: HTMLDivElement | null;
		children?: import("svelte").Snippet;
		class?: string;
		resize?: ChatContainerAnimation;
		initial?: ChatContainerInitialAnimation;
		[key: string]: any;
	} = $props();

	const context = setChatContainerContext();

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
	class={cn("flex overflow-y-auto", className)}
	role="log"
	{...restProps}
>
	{@render children?.()}
</div>
