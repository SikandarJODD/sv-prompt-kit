<script lang="ts">
	import {
		BlocksIcon,
		BookOpenIcon,
		FolderGit2Icon,
		LayersIcon,
		PaletteIcon,
		ZapIcon,
		type Icon
	} from "@lucide/svelte";
	import FeatureCard from "./feature-card.svelte";

	type Feature = {
		title: string;
		icon: typeof Icon;
		description: string;
		iconWrapClass: string;
		iconClass: string;
	};

	const features: Feature[] = [
		{
			title: "Free and Open Source",
			icon: FolderGit2Icon,
			description:
				"Open-source components you can use in personal, client, and production work.",
			iconWrapClass:
				"border-emerald-200/70 bg-emerald-100/90 shadow-emerald-200/50 dark:border-emerald-900/80 dark:bg-emerald-950/50 dark:shadow-transparent",
			iconClass: "text-emerald-700 dark:text-emerald-300"
		},
		{
			title: "Built for AI Interfaces",
			icon: BlocksIcon,
			description:
				"Practical components for chat apps, copilots, and agent-style products.",
			iconWrapClass:
				"border-violet-200/70 bg-violet-100/90 shadow-violet-200/50 dark:border-violet-900/80 dark:bg-violet-950/50 dark:shadow-transparent",
			iconClass: "text-violet-700 dark:text-violet-300"
		},
		{
			title: "Fully Customizable",
			icon: PaletteIcon,
			description:
				"Tailor the styles, structure, and behavior to fit your product.",
			iconWrapClass:
				"border-rose-200/70 bg-rose-100/90 shadow-rose-200/50 dark:border-rose-900/80 dark:bg-rose-950/50 dark:shadow-transparent",
			iconClass: "text-rose-700 dark:text-rose-300"
		},
		{
			title: "Vercel AI SDK",
			icon: ZapIcon,
			description:
				"First-class integration with Vercel AI SDK for streaming, tool calls, and generative UI.",
			iconWrapClass:
				"border-sky-200/70 bg-sky-100/90 shadow-sky-200/50 dark:border-sky-900/80 dark:bg-sky-950/50 dark:shadow-transparent",
			iconClass: "text-sky-700 dark:text-sky-300"
		},
		{
			title: "TanStack AI",
			icon: LayersIcon,
			description:
				"Seamless integration with TanStack AI for type-safe, query-driven AI interactions.",
			iconWrapClass:
				"border-orange-200/70 bg-orange-100/90 shadow-orange-200/50 dark:border-orange-900/80 dark:bg-orange-950/50 dark:shadow-transparent",
			iconClass: "text-orange-700 dark:text-orange-300"
		},
		{
			title: "Svelte Examples",
			icon: BookOpenIcon,
			description:
				"Explore usage guides and examples for integrating components in your projects.",
			iconWrapClass:
				"border-amber-200/70 bg-amber-100/90 shadow-amber-200/50 dark:border-amber-900/80 dark:bg-amber-950/50 dark:shadow-transparent",
			iconClass: "text-amber-700 dark:text-amber-300"
		}
	];
</script>

<div class="mx-auto w-full max-w-5xl space-y-10 py-16 md:space-y-12 md:py-24">
	<div class="mx-auto max-w-3xl text-center z-[999]">
		<div
			class="mx-auto inline-flex items-center rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase shadow-sm backdrop-blur"
		>
			<span>Introducing</span>
		</div>
		<h2
			id="features"
			class="mt-5 text-2xl font-medium text-balance md:text-4xl lg:text-5xl"
		>
			AI components you can actually own.
		</h2>
	</div>

	<div class="overflow-hidden rounded-2xl border bg-background/70 shadow-sm">
		<div
			class="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3"
		>
			{#each features as feature (feature.title)}
				<FeatureCard {feature} />
			{/each}
		</div>
	</div>
</div>
