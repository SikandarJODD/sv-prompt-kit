<script lang="ts">
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as Message from "$lib/components/ai/message";
	import { Button } from "$lib/components/ui/button/index.js";

	type ChatMessage = {
		id: number;
		role: "user" | "assistant";
		content: string;
	};

	const baseThread: ChatMessage[] = [
		{
			id: 1,
			role: "user",
			content: "Which scroll preset should I use for a conversational UI?"
		},
		{
			id: 2,
			role: "assistant",
			content:
				"Use `smooth` if you want the default spring, or `ease-out` if you want a softer finish at the bottom."
		}
	];

	let smoothMessages = $state<ChatMessage[]>([...baseThread]);
	let easeOutMessages = $state<ChatMessage[]>([
		...baseThread.map((message) => ({ ...message }))
	]);

	function appendToBoth() {
		const smoothStart = smoothMessages.length + 1;
		const easeOutStart = easeOutMessages.length + 1;

		smoothMessages = [
			...smoothMessages,
			{
				id: smoothStart,
				role: "user",
				content: "Add another note about bottom-lock behavior."
			},
			{
				id: smoothStart + 1,
				role: "assistant",
				content:
					"The container will only keep following new content when the reader is already near the bottom."
			}
		];

		easeOutMessages = [
			...easeOutMessages,
			{
				id: easeOutStart,
				role: "user",
				content: "Add another note about bottom-lock behavior."
			},
			{
				id: easeOutStart + 1,
				role: "assistant",
				content:
					"The same content is appended here, but the motion settles more gently because `ease-out` is more damped."
			}
		];
	}
</script>

<section
	class="flex w-full flex-col gap-4 rounded-2xl border border-border/60 bg-background p-4 shadow-sm"
>
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-sm font-semibold">Preset comparison</h2>
			<p class="text-xs text-muted-foreground">
				Compare `smooth` and `ease-out` with the same message flow.
			</p>
		</div>
		<Button size="sm" onclick={appendToBoth}>Append to both</Button>
	</div>

	<div class="grid gap-4 lg:grid-cols-2">
		<div
			class="flex h-[340px] min-h-0 flex-col overflow-hidden rounded-xl border border-border/60"
		>
			<div class="border-b border-border/60 px-4 py-3">
				<h3 class="text-sm font-medium">smooth</h3>
			</div>

			<ChatContainer.Root class="min-h-0 flex-1" resize="smooth">
				<ChatContainer.Content class="gap-4 p-4">
					{#each smoothMessages as message (message.id)}
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
		</div>

		<div
			class="flex h-[340px] min-h-0 flex-col overflow-hidden rounded-xl border border-border/60"
		>
			<div class="border-b border-border/60 px-4 py-3">
				<h3 class="text-sm font-medium">ease-out</h3>
			</div>

			<ChatContainer.Root class="min-h-0 flex-1" resize="ease-out">
				<ChatContainer.Content class="gap-4 p-4">
					{#each easeOutMessages as message (message.id)}
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
		</div>
	</div>
</section>
