<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";

	export type ThinkingBarProps = HTMLAttributes<HTMLDivElement> & {
		/** Additional CSS classes */
		class?: string;
		/** Text to display with shimmer effect */
		text?: string;
		/** Callback when stop button is clicked */
		onStop?: () => void;
		/** Label for the stop button */
		stopLabel?: string;
		/** Callback when thinking text is clicked */
		onclick?: () => void;
	};
</script>

<script lang="ts">
	import { cn } from "$lib/utils";
	import { TextShimmer } from "$lib/components/ai/text-shimmer";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

	let {
		class: className,
		text = "Thinking",
		onStop,
		stopLabel = "Answer now",
		onclick,
		...restProps
	}: ThinkingBarProps = $props();
</script>

<div
	class={cn("flex w-full items-center justify-between", className)}
	{...restProps}
>
	{#if onclick}
		<button
			type="button"
			{onclick}
			class="flex items-center gap-1 text-sm transition-opacity hover:opacity-80"
		>
			<TextShimmer class="font-medium">{text}</TextShimmer>
			<ChevronRight class="size-4 text-muted-foreground" />
		</button>
	{:else}
		<TextShimmer class="cursor-default font-medium">{text}</TextShimmer>
	{/if}
	{#if onStop}
		<button
			onclick={onStop}
			type="button"
			class="border-b border-dotted border-muted-foreground/50 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
		>
			{stopLabel}
		</button>
	{/if}
</div>
