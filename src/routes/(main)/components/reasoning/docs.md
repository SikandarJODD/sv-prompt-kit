# Reasoning

A collapsible component for showing AI reasoning, intermediate explanations, or solution traces. It can be controlled manually or opened automatically while reasoning content is streaming, and it supports markdown out of the box.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/reasoning.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Install the required packages first, then copy the files from `src/lib/components/ai/reasoning`.

```bash
pnpm add mode-watcher runed streamdown-svelte @streamdown-svelte/code
```

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import {
		Reasoning,
		ReasoningTrigger,
		ReasoningContent
	} from "$lib/components/ai/reasoning";

	let reasoningText = $state("");
	let isStreaming = $state(false);
</script>

<Reasoning {isStreaming}>
	<ReasoningTrigger>Show AI reasoning</ReasoningTrigger>
	<ReasoningContent markdown content={reasoningText} />
</Reasoning>
```

## Props

### `Reasoning`

- `children`: The trigger and content primitives rendered inside the wrapper.
- `open`: Optional controlled open state.
- `onOpenChange`: Called whenever the open state changes.
- `isStreaming`: Defaults to `false`. Auto-opens while content is streaming and auto-closes when streaming ends.
- `class`: Additional CSS classes for the outer wrapper.
- `...props`: Additional native `div` attributes.

### `ReasoningTrigger`

- `children`: Trigger label content.
- `class`: Additional CSS classes for the trigger button.
- `...props`: Additional native button attributes.

### `ReasoningContent`

- `children`: Custom markup rendered when `content` is not supplied.
- `content`: String content used for markdown rendering.
- `markdown`: Defaults to `false`. Enables markdown rendering for `content`.
- `class`: Additional CSS classes for the collapsible wrapper.
- `contentClass`: Additional CSS classes for the inner content area.
- `...props`: Additional native attributes forwarded to the wrapper.

## Features

- Auto-opens while reasoning text is streaming, then collapses again when the stream finishes.
- Supports both markdown content and fully custom snippet content.
- Uses animated height transitions so long reasoning blocks expand and collapse smoothly.

## Examples

### Streaming markdown reasoning

```svelte
<script lang="ts">
	import {
		Reasoning,
		ReasoningTrigger,
		ReasoningContent
	} from "$lib/components/ai/reasoning";

	let isStreaming = $state(true);
	let reasoningText = $state("### Step 1\nAnalyze the prompt...");
</script>

<Reasoning {isStreaming}>
	<ReasoningTrigger>Show AI reasoning</ReasoningTrigger>
	<ReasoningContent
		markdown
		content={reasoningText}
		class="ml-2 border-l-2 px-2"
	/>
</Reasoning>
```
