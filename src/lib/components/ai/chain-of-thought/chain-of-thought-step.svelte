<script lang="ts">
	import { Collapsible } from "$lib/components/ui/collapsible/index.js";
	import { cn } from "$lib/utils";
	import type { Collapsible as CollapsiblePrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface ChainOfThoughtStepProps extends CollapsiblePrimitive.RootProps {
		class?: string;
		children?: Snippet;
	}

	let {
		class: className,
		children,
		...restProps
	}: ChainOfThoughtStepProps = $props();
</script>

<Collapsible
	class={cn(
		"group [&:last-child_[data-slot=chain-of-thought-step-content-rail]]:hidden [&:last-child_[data-slot=chain-of-thought-step-content-spacer]]:block [&:last-child_[data-slot=chain-of-thought-step-tail]]:hidden",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<div class="flex justify-start" data-slot="chain-of-thought-step-tail">
		<div class="bg-primary/20 ml-1.75 h-4 w-px"></div>
	</div>
</Collapsible>
