<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import Markdown from "$lib/components/ai/markdown";

	let {
		markdown = false,
		class: className,
		content,
		children,
		...restProps
	}: {
		content?: string;
		markdown?: boolean;
		class?: string;
		children?: Snippet;
	} & HTMLAttributes<HTMLDivElement> = $props();
</script>

{#if markdown && content}
	<Markdown
		class={cn(
			"prose rounded-lg bg-secondary p-2 wrap-break-word whitespace-normal text-foreground",
			className
		)}
		{content}
	></Markdown>
{:else}
	<div
		class={cn(
			"prose rounded-lg bg-secondary p-2 wrap-break-word whitespace-normal text-foreground",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
