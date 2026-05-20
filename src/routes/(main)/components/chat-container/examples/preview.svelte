<script lang="ts">
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as Message from "$lib/components/ai/message";
	import { Button } from "$lib/components/ui/button/index.js";

	let messages = $state([
		{
			id: 1,
			role: "assistant",
			content:
				"The latest reply will stay pinned to the bottom as the thread grows."
		},
		{
			id: 2,
			role: "user",
			content: "Add one more message so I can see the behavior."
		}
	]);

	function addMessage() {
		messages = [
			...messages,
			{
				id: messages.length + 1,
				role: messages.length % 2 === 0 ? "assistant" : "user",
				content:
					messages.length % 2 === 0
						? "This new assistant message is appended at the bottom."
						: "And this user message follows it immediately."
			}
		];
	}
</script>

<section
	class="flex h-[360px] w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm"
>
	<div
		class="flex items-center justify-between border-b border-border/60 px-4 py-3"
	>
		<div>
			<h2 class="text-sm font-semibold">Auto-follow preview</h2>
			<p class="text-xs text-muted-foreground">
				A compact thread using the default `smooth` resize preset.
			</p>
		</div>
		<Button size="sm" onclick={addMessage}>Append message</Button>
	</div>

	<ChatContainer.Root class="min-h-0 flex-1">
		<ChatContainer.Content class="gap-3 p-4">
			{#each messages as message (message.id)}
				{@const isAssistant = message.role === "assistant"}

				<Message.Root
					class={isAssistant ? "items-start" : "justify-end"}
				>
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
