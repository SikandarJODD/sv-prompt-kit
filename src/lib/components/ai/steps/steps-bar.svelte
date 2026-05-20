<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";

	interface StepsBarProps extends HTMLAttributes<HTMLDivElement> {}

	let { class: className, ...restProps }: StepsBarProps = $props();
</script>

<div
	class={cn("h-full w-0.5 bg-muted", className)}
	aria-hidden="true"
	{...restProps}
></div>
