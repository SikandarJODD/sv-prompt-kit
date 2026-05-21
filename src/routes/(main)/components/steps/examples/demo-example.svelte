<script lang="ts">
	import * as Source from "$lib/components/ai/source";
	import * as Steps from "$lib/components/ai/steps";
</script>

<div class="min-w-sm space-y-4">
	<Steps.Root defaultOpen>
		<Steps.Trigger>Web search: modern LLM UI patterns</Steps.Trigger>
		<Steps.Content>
			<div class="space-y-2">
				<Steps.Item>Searching across curated sources...</Steps.Item>
				<Steps.Item>Top matches</Steps.Item>
				<div class="flex flex-wrap gap-1.5">
					<Source.Root href="https://prompt-kit.com/docs">
						<Source.Trigger
							label="prompt-kit.com/docs"
							showFavicon
						/>
						<Source.Content
							title="Prompt Kit Docs"
							description="High-quality, accessible, and customizable components for AI interfaces."
						/>
					</Source.Root>
					<Source.Root href="https://github.com/ibelick/prompt-kit">
						<Source.Trigger
							label="github.com/ibelick/prompt-kit"
							showFavicon
						/>
						<Source.Content
							title="prompt-kit on GitHub"
							description="Source code and issues for Prompt Kit."
						/>
					</Source.Root>
				</div>
				<Steps.Item
					>Extracting key sections and summarizing...</Steps.Item
				>
			</div>
		</Steps.Content>
	</Steps.Root>
</div>
