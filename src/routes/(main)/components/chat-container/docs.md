# Chat Container

A component for building chat interfaces with intelligent auto-scrolling behavior. It keeps a conversation pinned near the bottom when the reader is already there, while still letting the user scroll away to inspect older messages.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chat-container.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Install the dependency first, then copy the files from `src/lib/components/ai/chat-container`.

```bash
pnpm add stick-to-bottom-svelte
```

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as ChatContainer from "$lib/components/ai/chat-container";
</script>

<ChatContainer.Root class="h-96 min-h-0 flex-1">
	<ChatContainer.Content class="gap-4 p-4">
		<div class="rounded-xl border p-3">User message</div>
		<div class="rounded-xl border p-3">Assistant response</div>
	</ChatContainer.Content>
</ChatContainer.Root>
```

## Props

### `ChatContainer.Root`

- `ref`: Bindable reference to the scrollable root element.
- `children`: Message list and any overlay controls rendered inside the scroll area.
- `class`: Additional CSS classes for the scroll container.
- `resize`: Defaults to `"smooth"`. Controls the animation used when content height changes while sticking to the bottom.
- `initial`: Defaults to `"instant"`. Controls the initial scroll behavior when content is first measured.
- `...props`: Additional native `div` attributes forwarded to the root.

### `ChatContainer.Content`

- `children`: Message content rendered inside the tracked content element.
- `class`: Additional CSS classes for the content wrapper.
- `...props`: Additional native `div` attributes forwarded to the content wrapper.

## Features

- Keeps the viewport anchored near the latest message without fighting the user when they scroll up.
- Supports built-in motion presets such as `instant`, `smooth`, and `ease-out`.
- Works cleanly with streaming responses where the latest assistant message grows over time.

## Examples

### Included Examples

- `Basic conversation`: A standard message list wrapped in the auto-scrolling primitives.
- `Streaming response`: Streams assistant text into the latest message while the container stays near the bottom.
- `Preset comparison`: Compares `smooth` and `ease-out` resize behavior with the same content.

### Streaming response

```svelte
<script lang="ts">
	import * as ChatContainer from "$lib/components/ai/chat-container";
	import * as Message from "$lib/components/ai/message";

	let messages = $state([
		{ id: 1, role: "user", content: "Explain CSS Grid auto-fit." },
		{ id: 2, role: "assistant", content: "It creates as many columns as fit." }
	]);
</script>

<ChatContainer.Root class="h-[420px] min-h-0 flex-1">
	<ChatContainer.Content class="gap-4 p-4">
		{#each messages as message (message.id)}
			<Message.Root class={message.role === "assistant" ? "items-start" : "justify-end"}>
				<Message.Content content={message.content} markdown={message.role === "assistant"} />
			</Message.Root>
		{/each}
	</ChatContainer.Content>
</ChatContainer.Root>
```
