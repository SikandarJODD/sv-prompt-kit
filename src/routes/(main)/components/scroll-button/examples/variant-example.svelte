<script lang="ts">
	import * as ScrollButton from "$lib/components/ai/scroll-button";
	import {
		Button,
		type ButtonVariant
	} from "$lib/components/ui/button/index.js";

	let variant = $state<ButtonVariant>("secondary");

	const content = Array.from({ length: 20 }, (_, index) => ({
		id: index,
		title: `Item ${index + 1}`,
		description: "This is a sample item to demonstrate scrolling behavior."
	}));
</script>

<div class="flex h-[500px] w-full flex-col overflow-hidden">
	<div
		class="no-scrollbar! flex w-full items-center justify-end gap-2 overflow-x-scroll p-3"
	>
		<div class="flex gap-2">
			<Button
				size="sm"
				variant={variant === "default" ? "default" : "outline"}
				onclick={() => (variant = "default")}
			>
				Default
			</Button>
			<Button
				size="sm"
				variant={variant === "outline" ? "default" : "outline"}
				onclick={() => (variant = "outline")}
			>
				Outline
			</Button>
			<Button
				size="sm"
				variant={variant === "secondary" ? "default" : "outline"}
				onclick={() => (variant = "secondary")}
			>
				Secondary
			</Button>
		</div>
	</div>

	<div
		class="relative flex-1 overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm"
	>
		<ScrollButton.Root class="h-full flex-col">
			<ScrollButton.Content class="flex w-full flex-col p-4 pb-24">
				{#each content as item (item.id)}
					<div class="border-b border-border/60 p-3 last:border-b-0">
						<h3 class="font-medium">{item.title}</h3>
						<p class="text-muted-foreground">
							{item.description}
						</p>
					</div>
				{/each}
			</ScrollButton.Content>

			<div
				class="pointer-events-none sticky right-0 bottom-4 mt-auto flex justify-end px-6"
			>
				<ScrollButton.Button
					{variant}
					class="pointer-events-auto shadow-sm"
				/>
			</div>
		</ScrollButton.Root>
	</div>
</div>
