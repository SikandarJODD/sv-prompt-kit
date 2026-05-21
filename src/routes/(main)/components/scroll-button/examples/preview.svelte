<script lang="ts">
	import * as ScrollButton from "$lib/components/ai/scroll-button";

	const items = Array.from({ length: 10 }, (_, index) => ({
		id: index,
		title: `Item ${index + 1}`,
		description: "This is a sample item to demonstrate scrolling behavior."
	}));
</script>

<div class="rounded-2xl border border-border/60 bg-background shadow-sm">
	<ScrollButton.Root class="h-75 flex-col">
		<ScrollButton.Content class="flex w-full flex-col p-4 pb-20">
			{#each items as item (item.id)}
				<div class="border-b border-border/60 p-3 last:border-b-0">
					<p class="text-sm font-medium">{item.title}</p>
					<p class="mt-1 text-sm text-muted-foreground">
						{item.description}
					</p>
				</div>
			{/each}
		</ScrollButton.Content>

		<div
			class="pointer-events-none sticky right-0 bottom-4 mt-auto flex justify-end px-4"
		>
			<ScrollButton.Button class="pointer-events-auto shadow-sm" />
		</div>
	</ScrollButton.Root>
</div>
