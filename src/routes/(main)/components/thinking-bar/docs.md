# Thinking Bar

A compact status bar for AI thinking states. It combines shimmering text with an optional stop action and an optional click target, which makes it useful for expandable reasoning panels or “answer now” controls during long-running generations.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/thinking-bar.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/thinking-bar` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { ThinkingBar } from "$lib/components/ai/thinking-bar";

	function handleStop() {
		console.log("Stop thinking");
	}
</script>

<ThinkingBar
	text="Analyzing your question"
	onStop={handleStop}
/>
```

## Props

### `ThinkingBar`

- `text`: Label shown with the shimmer effect. Defaults to `"Thinking"`.
- `onStop`: Optional callback for the stop action.
- `stopLabel`: Label for the stop action. Defaults to `"Answer now"`.
- `onclick`: Optional callback for the thinking text. When provided, the label becomes an interactive button.
- `class`: Additional CSS classes for the root container.
- `...props`: Additional native `div` attributes.

## Features

- Builds on `TextShimmer` so the status text feels active without using a heavy loader.
- Can expose a secondary “stop” action for long-running responses.
- Becomes clickable when `onclick` is provided, which works well for opening a reasoning panel or details drawer.

## Examples

### Interactive thinking state

```svelte
<script lang="ts">
	import { ThinkingBar } from "$lib/components/ai/thinking-bar";
</script>

<ThinkingBar
	text="Deep thinking in progress"
	stopLabel="Skip to answer"
	onStop={() => console.log("Stop generation")}
	onclick={() => console.log("Open reasoning panel")}
/>
```
