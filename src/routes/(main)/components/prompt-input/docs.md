# Prompt Input

A structured prompt composer for AI apps. It gives you a root wrapper, autosizing textarea, action row, and tooltip-aware action buttons so you can build a production-style chat input instead of wiring those pieces together each time.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/prompt-input.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/prompt-input` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import {
		PromptInput,
		PromptInputTextarea,
		PromptInputActions,
		PromptInputAction
	} from "$lib/components/ai/prompt-input";

	let value = $state("");

	function handleSubmit() {
		console.log(value);
	}
</script>

<PromptInput value={value} onValueChange={(next) => (value = next)} onSubmit={handleSubmit}>
	<PromptInputTextarea placeholder="Ask me anything..." />

	<PromptInputActions class="justify-end pt-2">
		<PromptInputAction>
			{#snippet tooltip()}Send message{/snippet}
			<button type="button" onclick={handleSubmit}>Send</button>
		</PromptInputAction>
	</PromptInputActions>
</PromptInput>
```

## Props

### `PromptInput`

- `value`: Current textarea value.
- `onValueChange`: Called whenever the textarea value changes.
- `isLoading`: Disables the input while a request is in flight.
- `maxHeight`: Defaults to `240`. Maximum autosized textarea height.
- `onSubmit`: Called when the user presses `Enter` without `Shift`.
- `children`: The textarea, action row, and any extra UI rendered inside the wrapper.
- `class`: Additional CSS classes for the root container.

### `PromptInputTextarea`

- `disableAutosize`: Defaults to `false`. Turns off automatic height growth.
- `...props`: Additional native textarea attributes such as `placeholder`, `rows`, `maxlength`, or `aria-*`.

### `PromptInputActions`

- `children`: Action buttons or custom controls shown below the textarea.
- `class`: Additional CSS classes for the actions row.
- `...props`: Additional native `div` attributes.

### `PromptInputAction`

- `tooltip`: Tooltip snippet rendered for the action trigger.
- `children`: The interactive control for the action.
- `class`: Additional CSS classes for the tooltip content.
- `side`: Tooltip side. Defaults to `"top"`.
- `...props`: Additional Bits UI tooltip root props.

## Features

- Autosizes the textarea as content grows while respecting a configurable max height.
- Submits on `Enter` and preserves multiline entry with `Shift+Enter`.
- Shares disabled and tooltip behavior across all actions through component context.

## Examples

### Composer with attachments

```svelte
<script lang="ts">
	import {
		PromptInput,
		PromptInputTextarea,
		PromptInputActions,
		PromptInputAction
	} from "$lib/components/ai/prompt-input";

	let input = $state("");
</script>

<PromptInput value={input} onValueChange={(next) => (input = next)} onSubmit={() => console.log(input)}>
	<PromptInputTextarea placeholder="Ask me anything..." />

	<PromptInputActions class="justify-between pt-2">
		<PromptInputAction>
			{#snippet tooltip()}Attach files{/snippet}
			<button type="button">Attach</button>
		</PromptInputAction>

		<PromptInputAction>
			{#snippet tooltip()}Send message{/snippet}
			<button type="button">Send</button>
		</PromptInputAction>
	</PromptInputActions>
</PromptInput>
```
