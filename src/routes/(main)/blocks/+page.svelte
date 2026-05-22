<script lang="ts">
	import { page } from "$app/state";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import { cn } from "$lib/utils";
	import { H1, H2, Paragraph } from "$markdown";
	import { blocks, pageData, seo } from "./data";

	let getInstallUrl = (installPath: string) => {
		return `${page.url.origin}${installPath}`;
	};
</script>

<Seo title={seo.title} description={seo.description} keywords={seo.keywords} />

<div class="space-y-8">
	<section class="space-y-3">
		<H1 id="blocks">{pageData.title}</H1>
		<div class="mt-3 max-w-2xl">
			<Paragraph>{pageData.description}</Paragraph>
		</div>
	</section>

	<div class="space-y-0">
		{#each blocks as block, index (block.id)}
			<section
				class={cn(
					"space-y-4 py-8",
					index < blocks.length - 1 &&
						"border-b border-dashed border-border"
				)}
			>
				<H2 id={block.id}>{block.title}</H2>

				<PMCommand
					command="execute"
					args={[
						"shadcn-svelte@latest",
						"add",
						getInstallUrl(block.installPath)
					]}
				/>

				<PreviewComponent
					code={block.code}
					isCentered={false}
					class={cn("mt-2", block.previewClass)}
				>
					<block.component />
				</PreviewComponent>
			</section>
		{/each}
	</div>
</div>
