<script lang="ts">
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as Message from "$lib/components/ai/message";
	import { Button } from "$lib/components/ui/button/index.js";

	let messages = $state([
		{
			id: 1,
			role: "user",
			content:
				"Can you outline a launch checklist for a new chat feature?"
		},
		{
			id: 2,
			role: "assistant",
			content:
				"Absolutely. Start with **tracking**, **latency budgets**, **rate limiting**, and a short **fallback experience** for model downtime."
		},
		{
			id: 3,
			role: "user",
			content: "What should I review before enabling it for everyone?"
		},
		{
			id: 4,
			role: "assistant",
			content:
				"Check analytics, moderation coverage, prompt regression cases, and whether support has canned responses for common failures."
		}
	]);

	const followUps = [
		"Add a smoke test that verifies streaming still reaches the bottom of the viewport.",
		"Document your escalation path for provider outages and slow responses.",
		"Review empty, loading, and retry states before widening the rollout."
	];

	let followUpIndex = $state(0);

	function addFollowUp() {
		const content = followUps[followUpIndex % followUps.length];
		const nextId = messages.length + 1;

		messages = [
			...messages,
			{
				id: nextId,
				role: "assistant",
				content
			}
		];

		followUpIndex += 1;
	}
</script>

<section
	class="flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm"
>
	<div
		class="flex items-center justify-between border-b border-border/60 px-4 py-3"
	>
		<div>
			<h2 class="text-sm font-semibold">Basic conversation</h2>
			<p class="text-xs text-muted-foreground">
				Append a message and the container stays pinned to the bottom.
			</p>
		</div>
		<Button size="sm" onclick={addFollowUp}>Add follow-up</Button>
	</div>

	<ChatContainer.Root class="min-h-0 flex-1">
		<ChatContainer.Content class="gap-4 p-4">
			{#each messages as message (message.id)}
				{@const isAssistant = message.role === "assistant"}

				<Message.Root
					class={isAssistant ? "items-start" : "justify-end"}
				>
					{#if isAssistant}
						<div
							class="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground"
						>
							AI
						</div>
					{/if}

					<div class="max-w-[85%]">
						{#if isAssistant}
							<Message.Content
								content={message.content}
								markdown
							/>
						{:else}
							<Message.Content
								class="ml-auto bg-primary text-primary-foreground"
							>
								{message.content}
							</Message.Content>
						{/if}
					</div>
				</Message.Root>
			{/each}
		</ChatContainer.Content>
	</ChatContainer.Root>
</section>
