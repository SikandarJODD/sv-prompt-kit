<script lang="ts">
	import { Chat } from "@ai-sdk/svelte";
	import { Button } from "$lib/components/ui/button";
	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as PromptInput from "$lib/components/ai/prompt-input";
	import MessageComponent from "./message-component.svelte";
	import LoadingMessage from "./loading-message.svelte";
	import ErrorMessage from "./error-message.svelte";
	import { Pause } from "@lucide/svelte";

	let inputValue = $state("");

	let chat = new Chat({});

	let handleSubmit = () => {
		if (!inputValue.trim()) return;

		chat.sendMessage({ text: inputValue });
		inputValue = "";
	};

	let isLoading = $derived(chat.status !== "ready");

	let stop = () => {
		chat.stop();
	};
</script>

<div class="flex h-120 w-full flex-col overflow-hidden">
	<ChatContainer.Root
		class="relative mx-auto h-full w-full max-w-2xl flex-1 mb-4 space-y-0 overflow-y-auto"
	>
		<ChatContainer.Content class="min-w-full space-y-0 py-12">
			{#each chat.messages as message, index}
				{@const isLastMessage = index === chat.messages.length - 1}
				<MessageComponent {message} {isLastMessage} {chat} />
			{/each}

			{#if chat.status === "submitted"}
				<LoadingMessage />
			{/if}

			{#if chat.status === "error" && chat.error}
				<ErrorMessage error={chat.error} />
			{/if}
		</ChatContainer.Content>
	</ChatContainer.Root>

	<div
		class="inset-x-0 bottom-0 mx-auto w-full max-w-2xl shrink-0 px-3 pb-3 md:px-5 md:pb-5"
	>
		<PromptInput.Root
			{isLoading}
			value={inputValue}
			onValueChange={(value) => (inputValue = value)}
			onSubmit={handleSubmit}
			class="relative z-10 w-full rounded-3xl border border-input bg-popover p-0 pt-1 shadow-xs"
		>
			<div class="flex flex-col">
				<PromptInput.Textarea
					placeholder="Ask anything"
					class="min-h-11 pt-3 pl-4 text-base leading-[1.3] sm:text-base md:text-base"
				/>

				<PromptInput.Actions
					class="mt-3 flex w-full items-center justify-end gap-2 p-2"
				>
					<div class="flex items-center gap-2">
						<Button
							size="icon"
							onclick={() => {
								if (
									chat.status === "ready" ||
									chat.status === "error"
								) {
									handleSubmit();
								} else {
									stop();
								}
							}}
							class="size-9 rounded-full"
						>
							{#if chat.status === "ready" || chat.status === "error"}
								<ArrowUp size={18} />
							{:else}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="1.4"
									stroke-linecap="round"
									stroke-linejoin="round"
									><rect
										width="18"
										height="18"
										x="3"
										y="3"
										rx="2"
									/></svg
								>
							{/if}
						</Button>
					</div>
				</PromptInput.Actions>
			</div>
		</PromptInput.Root>
	</div>
</div>
