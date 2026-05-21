# Message

Message primitives for chat transcripts. The API separates the message row, body, actions, and tooltip-wrapped action controls so you can build assistant and user messages with consistent structure.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/message.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/message` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as Message from "$lib/components/ai/message";
</script>

<Message.Root class="justify-start">
	<Message.Content content="This answer can render **markdown**." markdown />
</Message.Root>
```

## Props

### `Message.Root`

- `children`: Message body content such as text, actions, or other UI.
- `class`: Additional CSS classes for the message row.
- `...props`: Additional native `div` attributes forwarded to the root.

### `Message.Content`

- `content`: String content used when `markdown` mode is enabled.
- `markdown`: Defaults to `false`. Renders `content` through the `Markdown` component instead of snippet children.
- `children`: Custom content rendered when `markdown` is `false`.
- `class`: Additional CSS classes for the message bubble.
- `...props`: Additional native `div` attributes forwarded when using snippet children.

### `Message.Actions`

- `children`: Action buttons or controls shown beneath a message.
- `class`: Additional CSS classes for the actions row.
- `...props`: Additional native `div` attributes.

### `Message.Action`

- `tooltip`: Tooltip content rendered for the action trigger.
- `children`: Interactive element that opens the tooltip.
- `side`: Defaults to `"top"`. Tooltip placement relative to the trigger.
- `class`: Additional CSS classes for the tooltip content.
- `...props`: Additional Bits UI tooltip root props.

## Features

- Supports plain snippet content and markdown-rendered content with the same message component.
- Keeps actions separate from the message bubble so controls like copy, retry, and feedback stay consistent.
- Wraps action controls with tooltip primitives for compact icon-only buttons.

## Examples

### Message with actions

```svelte
<script lang="ts">
	import * as Message from "$lib/components/ai/message";
</script>

<Message.Root class="justify-start">
	<div class="flex flex-col gap-2">
		<Message.Content class="bg-transparent p-0">
			I can help with product strategy, coding, and content generation.
		</Message.Content>

		<Message.Actions>
			<Message.Action>
				{#snippet tooltip()}Copy{/snippet}
				<button type="button">Copy</button>
			</Message.Action>
		</Message.Actions>
	</div>
</Message.Root>
```
