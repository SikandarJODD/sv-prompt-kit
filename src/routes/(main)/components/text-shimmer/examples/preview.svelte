<script lang="ts">
	import { TextShimmer } from "$lib/components/ai/text-shimmer";

	const PreviewComponent: any = TextShimmer;
</script>

<div class="flex w-full flex-col gap-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6">
	<p class="text-sm text-muted-foreground">
		Replace this starter preview with a polished Text Shimmer example.
	</p>
	<div class="flex min-h-48 items-center justify-center rounded-xl bg-background/80 p-6">
		<PreviewComponent />
	</div>
</div>
