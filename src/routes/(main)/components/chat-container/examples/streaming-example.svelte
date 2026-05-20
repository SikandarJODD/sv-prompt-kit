<script lang="ts">
	import { onDestroy } from "svelte";
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as Message from "$lib/components/ai/message";
	import { Button } from "$lib/components/ui/button/index.js";

	let messages = $state([
		{
			id: 1,
			role: "user",
			content: "Explain CSS Grid auto-fit in simple terms."
		},
		{
			id: 2,
			role: "assistant",
			content:
				"`auto-fit` tells the grid to create as many columns as will fit while respecting the minimum size you provide."
		}
	]);

	let isStreaming = $state(false);
	let streamInterval: ReturnType<typeof setInterval> | null = null;
	let streamContent = "";

	function streamResponse() {
		if (isStreaming) return;

		isStreaming = true;

		const fullResponse =
			"With `repeat(auto-fit, minmax(220px, 1fr))`, the grid keeps creating columns while there is room. When the layout gets narrower, columns wrap automatically instead of shrinking below 220px. That gives you a responsive layout without writing media queries for every breakpoint.";

		const newMessageId = messages.length + 1;
		messages = [
			...messages,
			{
				id: newMessageId,
				role: "assistant",
				content: ""
			}
		];

		let charIndex = 0;
		streamContent = "";

		streamInterval = setInterval(() => {
			if (charIndex < fullResponse.length) {
				streamContent += fullResponse[charIndex];
				messages = messages.map((message) =>
					message.id === newMessageId
						? { ...message, content: streamContent }
						: message
				);
				charIndex += 1;
				return;
			}

			if (streamInterval) {
				clearInterval(streamInterval);
				streamInterval = null;
			}

			isStreaming = false;
		}, 24);
	}

	onDestroy(() => {
		if (streamInterval) {
			clearInterval(streamInterval);
		}
	});
</script>

<section
	class="flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background shadow-sm"
>
	<div
		class="flex items-center justify-between border-b border-border/60 px-4 py-3"
	>
		<div>
			<h2 class="text-sm font-semibold">Streaming response</h2>
			<p class="text-xs text-muted-foreground">
				Streaming text keeps the last assistant reply visible as it
				grows.
			</p>
		</div>
		<Button size="sm" onclick={streamResponse} disabled={isStreaming}>
			{isStreaming ? "Streaming..." : "Start stream"}
		</Button>
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
