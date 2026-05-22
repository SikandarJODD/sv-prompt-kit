<script lang="ts">
	import { cn } from "$lib/utils";
	import * as Message from "$lib/components/ai/message";
	import { Button } from "$lib/components/ui/button";
	import Copy from "@lucide/svelte/icons/copy";
	import ThumbsUp from "@lucide/svelte/icons/thumbs-up";
	import ThumbsDown from "@lucide/svelte/icons/thumbs-down";
	import type { ChatState, UIMessage } from "ai";
	import { RotateCcw } from "@lucide/svelte";

	let {
		message,
		isLastMessage = false,
		chat
	}: {
		message: UIMessage;
		isLastMessage?: boolean;
		chat: any;
	} = $props();

	const isAssistant = $derived(message.role === "assistant");

	const messageText = $derived(
		message.parts
			.map((part) => (part.type === "text" ? part.text : ""))
			.join("")
	);

	let handleCopy = () => {
		navigator.clipboard.writeText(messageText);
	};

	let regenerate = () => {
		// chat provides .regenerate() method which regenerates the last assistant message
		chat.regenerate();
	};
</script>

<Message.Root
	class={cn(
		"mx-auto flex w-full max-w-3xl flex-col gap-0 px-2 md:px-10",
		isAssistant ? "items-start" : "items-end"
	)}
>
	{#if isAssistant}
		<div class="group flex w-full flex-col gap-0">
			<Message.Content
				class="w-full min-w-0 flex-1 rounded-lg bg-transparent p-0 text-foreground"
				markdown={true}
				content={messageText}
			/>
			<Message.Actions
				class={cn(
					"-ml-2.5 flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100",
					isLastMessage && "opacity-100"
				)}
			>
				<Message.Action delayDuration={100}>
					{#snippet tooltip()}
						Copy
					{/snippet}
					<Button
						variant="ghost"
						size="icon"
						onclick={handleCopy}
						class="rounded-full"
					>
						<Copy class="h-4 w-4" />
					</Button>
				</Message.Action>
				<Message.Action delayDuration={100}>
					{#snippet tooltip()}
						Upvote
					{/snippet}
					<Button variant="ghost" size="icon" class="rounded-full">
						<ThumbsUp class="h-4 w-4" />
					</Button>
				</Message.Action>
				<Message.Action delayDuration={100}>
					{#snippet tooltip()}
						Downvote
					{/snippet}
					<Button variant="ghost" size="icon" class="rounded-full">
						<ThumbsDown class="h-4 w-4" />
					</Button>
				</Message.Action>
				<Message.Action delayDuration={100}>
					{#snippet tooltip()}
						Regenerate
					{/snippet}
					<Button
						variant="ghost"
						size="icon"
						onclick={regenerate}
						class="rounded-full"
					>
						<RotateCcw class="h-4 w-4" />
					</Button>
				</Message.Action>
			</Message.Actions>
		</div>
	{:else}
		<div class="group flex w-full flex-col items-end gap-1">
			<Message.Content
				class="max-w-[85%] rounded-3xl bg-muted px-5 py-2.5 whitespace-pre-wrap text-primary sm:max-w-[75%]"
			>
				{messageText}
			</Message.Content>
			<Message.Actions
				class={cn(
					"flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
				)}
			>
				<Message.Action delayDuration={100}>
					{#snippet tooltip()}
						Copy
					{/snippet}
					<Button variant="ghost" size="icon" class="rounded-full">
						<Copy class="h-4 w-4" />
					</Button>
				</Message.Action>
			</Message.Actions>
		</div>
	{/if}
</Message.Root>
