<script lang="ts">
	import * as Steps from "$lib/components/ai/steps";
</script>

<div class="min-w-sm space-y-4">
	<Steps.Root defaultOpen>
		<Steps.Trigger>Agent run: Summarize repository</Steps.Trigger>
		<Steps.Content>
			<div class="space-y-1">
				<Steps.Item>Searching files in repo...</Steps.Item>
				<Steps.Item>Found 12 files (src, docs)</Steps.Item>
				<Steps.Item>Parsing markdown and code blocks</Steps.Item>
				<Steps.Item>Selecting tool: summarize</Steps.Item>
				<Steps.Item>Running summarize(tool) with top 5 files</Steps.Item
				>
				<Steps.Item class="text-foreground"
					>Summary generated</Steps.Item
				>
			</div>
		</Steps.Content>
	</Steps.Root>
</div>
