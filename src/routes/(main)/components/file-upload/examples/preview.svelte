<script lang="ts">
	import * as FileUpload from "$lib/components/ai/file-upload";
	import * as PromptInput from "$lib/components/ai/prompt-input";
	import { Button } from "$lib/components/ui/button";
	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import Paperclip from "@lucide/svelte/icons/paperclip";
	import Square from "@lucide/svelte/icons/square";
	import X from "@lucide/svelte/icons/x";

	let input = $state("");
	let isLoading = $state(false);
	let files = $state<File[]>([]);

	function handleFilesAdded(newFiles: File[]) {
		files = [...files, ...newFiles];
	}

	function handleSubmit() {
		if (input.trim() || files.length > 0) {
			isLoading = true;
			setTimeout(() => {
				isLoading = false;
				input = "";
				files = [];
			}, 2000);
		}
	}

	function handleValueChange(value: string) {
		input = value;
	}

	function removeFile(index: number) {
		files = files.filter((_, i) => i !== index);
	}
</script>

<FileUpload.Root
	onFilesAdded={handleFilesAdded}
	accept=".jpg,.jpeg,.png,.pdf,.docx"
>
	<PromptInput.Root
		value={input}
		onValueChange={handleValueChange}
		{isLoading}
		onSubmit={handleSubmit}
		class="w-full max-w-xl"
	>
		{#if files.length > 0}
			<div class="grid grid-cols-2 gap-2 pb-2">
				{#each files as file, index}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="flex w-full items-center justify-between gap-2 rounded-lg bg-secondary px-3 py-2 text-sm"
						onclick={(e) => e.stopPropagation()}
					>
						<div class="flex items-center gap-2">
							<Paperclip class="size-4" />
							<span class="max-w-20 truncate text-sm">
								{file.name}
							</span>
						</div>
						<button
							onclick={() => removeFile(index)}
							class="rounded-full p-1 hover:bg-secondary/50"
						>
							<X class="size-4" />
						</button>
					</div>
				{/each}
			</div>
		{/if}

		<PromptInput.Textarea placeholder="Type a message or drop files..." />

		<PromptInput.Actions
			class="flex items-center justify-between gap-2 pt-2"
		>
			<PromptInput.Action>
				{#snippet tooltip()}
					Attach files
				{/snippet}
				<FileUpload.Trigger asChild>
					<div
						class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl hover:bg-secondary-foreground/10"
					>
						<Paperclip class="size-5 text-primary" />
					</div>
				</FileUpload.Trigger>
			</PromptInput.Action>

			<PromptInput.Action>
				{#snippet tooltip()}
					{isLoading ? "Stop generation" : "Send message"}
				{/snippet}
				<Button
					variant="default"
					size="icon"
					class="h-8 w-8 rounded-full"
					onclick={handleSubmit}
				>
					{#if isLoading}
						<Square class="size-5 fill-current" />
					{:else}
						<ArrowUp class="size-5" />
					{/if}
				</Button>
			</PromptInput.Action>
		</PromptInput.Actions>
	</PromptInput.Root>

	<FileUpload.Content>
		<div
			class="flex min-h-50 w-full items-center justify-center backdrop-blur-sm"
		>
			<div
				class="m-4 w-full max-w-md rounded-lg border bg-background/90 p-8 shadow-lg"
			>
				<div class="mb-4 flex justify-center">
					<svg
						class="size-8 text-muted"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
							d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-center text-base font-medium">
					Drop files to upload
				</h3>
				<p class="text-center text-sm text-muted-foreground">
					Release to add files to your message
				</p>
			</div>
		</div>
	</FileUpload.Content>
</FileUpload.Root>
