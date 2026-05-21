# Markdown

A markdown renderer for AI responses and rich chat content. It accepts a markdown string, renders GitHub Flavored Markdown, and leaves wrapper styling under your control.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/markdown.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/markdown` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { Markdown } from "$lib/components/ai/markdown";

	const content = `## Summary

- Supports **bold** text
- Supports lists
- Supports code fences`;
</script>

<Markdown {content} class="max-w-3xl" />
```

## Props

### `Markdown`

- `content`: Markdown source string rendered with Streamdown.
- `id`: Optional id applied to the outer wrapper.
- `class`: Additional CSS classes for the outer markdown container.
- `...props`: Additional Streamdown and native `div` props forwarded to the wrapper or renderer.

## Features

- Renders markdown content through a dedicated component instead of mixing parser logic into every message bubble.
- Supports GitHub Flavored Markdown content such as headings, lists, emphasis, links, and fenced code blocks.
- Lets you style the wrapper with your own width, spacing, and prose classes.

## Examples

### Render a formatted answer

```svelte
<script lang="ts">
	import { Markdown } from "$lib/components/ai/markdown";

	const content = `# Markdown Example

This is **bold** and this is *italic*.

1. First item
2. Second item

\`\`\`ts
function greet(name: string) {
	return \`Hello, \${name}!\`;
}
\`\`\``;
</script>

<Markdown {content} />
```
