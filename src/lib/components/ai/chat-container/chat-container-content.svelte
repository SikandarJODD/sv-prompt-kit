<script lang="ts">
	import { cn } from "$lib/utils";
	import { getChatContainerContext } from "./context.svelte.js";

	let {
		children,
		class: className,
		...restProps
	}: {
		children?: import("svelte").Snippet;
		class?: string;
		[key: string]: any;
	} = $props();

	const context = getChatContainerContext();

	function bindContentElement(node: HTMLDivElement) {
		context.setContentElement(node);

		return () => {
			context.setContentElement(null);
		};
	}
</script>

<div
	{@attach bindContentElement}
	class={cn("flex w-full flex-col", className)}
	{...restProps}
>
	{@render children?.()}
</div>
