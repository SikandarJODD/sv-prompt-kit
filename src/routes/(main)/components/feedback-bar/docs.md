# Feedback Bar

A compact feedback control for AI responses. It provides helpful and not-helpful actions plus an optional close affordance, making it a good fit for chat transcripts, answer cards, and response review flows.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/feedback-bar.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/feedback-bar` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { FeedbackBar } from "$lib/components/ai/feedback-bar";

	function handleHelpful() {
		console.log("Marked helpful");
	}
</script>

<FeedbackBar
	title="Was this response helpful?"
	onHelpful={handleHelpful}
	onNotHelpful={() => console.log("Marked not helpful")}
	onClose={() => console.log("Dismissed")}
/>
```

## Props

### `FeedbackBar`

- `title`: Label shown next to the action buttons.
- `icon`: Optional leading icon snippet rendered before the title.
- `onHelpful`: Called when the thumbs-up button is clicked.
- `onNotHelpful`: Called when the thumbs-down button is clicked.
- `onClose`: Called when the close button is clicked.
- `class`: Additional CSS classes for the outer wrapper.
- `...props`: Additional native `div` attributes forwarded to the root element.

## Features

- Gives you a ready-made like, dislike, and dismiss pattern for response evaluation.
- Accepts a custom icon so the bar can match the surrounding context or model state.
- Uses simple callbacks instead of internal state, so analytics and mutations stay in your app logic.

## Examples

### Basic response rating

```svelte
<script lang="ts">
	import { FeedbackBar } from "$lib/components/ai/feedback-bar";
</script>

<FeedbackBar
	class="min-w-sm"
	title="Was this answer useful?"
	onHelpful={() => console.log("helpful")}
	onNotHelpful={() => console.log("not helpful")}
	onClose={() => console.log("closed")}
/>
```
