# Prompt Suggestion

A suggestion chip for AI interfaces that supports two modes: clickable prompt buttons and inline highlight mode for search-style suggestion lists. This makes it useful both before the first prompt and while the user is refining a query.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/prompt-suggestion.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/prompt-suggestion` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { PromptSuggestion } from "$lib/components/ai/prompt-suggestion";
</script>

<PromptSuggestion onclick={() => console.log("Explain rate limiting")}>
	Explain rate limiting
</PromptSuggestion>
```

## Props

### `PromptSuggestion`

- `children`: Text or custom snippet rendered inside the suggestion.
- `variant`: Button variant. Defaults to `outline` in standard button mode and `ghost` in highlight mode.
- `size`: Button size. Defaults to `lg` in standard button mode and `sm` in highlight mode.
- `class`: Additional CSS classes for the rendered button.
- `highlight`: Search term used to highlight matching text inside a plain string child.
- `ref`: Bindable reference to the underlying button element.
- `onclick`: Click handler for the suggestion.
- `disabled`: Disables the suggestion button.
- `type`: Button type. Defaults to `"button"`.

## Features

- Works as a regular rounded suggestion chip when no highlight term is provided.
- Switches to a search-result style row when `highlight` is set.
- Highlights only the matched substring while preserving the original casing of the prompt text.

## Examples

### Highlight matching suggestions

```svelte
<script lang="ts">
	import { PromptSuggestion } from "$lib/components/ai/prompt-suggestion";

	const searchTerm = "how to";
	const prompts = [
		"How to create a Svelte component",
		"How to optimize website performance",
		"How to deploy a SvelteKit application"
	];
</script>

{#each prompts as prompt (prompt)}
	<PromptSuggestion highlight={searchTerm}>
		{prompt}
	</PromptSuggestion>
{/each}
```
