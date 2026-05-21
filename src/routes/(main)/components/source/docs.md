# Source

Display cited website sources used by AI-generated content. The component renders a compact source chip and shows title, description, domain, and favicon details inside a hover card.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/source.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/source` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as Source from "$lib/components/ai/source";
</script>

<Source.Root href="https://prompt-kit.com/docs">
	<Source.Trigger label="prompt-kit.com/docs" showFavicon />
	<Source.Content
		title="Prompt Kit Docs"
		description="High-quality, accessible, and customizable components for AI interfaces."
	/>
</Source.Root>
```

## Props

### `Source.Root`

- `href`: Required destination URL for the source chip and the hover-card content link.
- `children`: The trigger and content primitives for the source item.

### `Source.Trigger`

- `label`: Optional string or number. Falls back to the domain name when omitted.
- `showFavicon`: Defaults to `false`. Displays the site favicon inside the chip.
- `class`: Additional CSS classes for the trigger chip.
- `...props`: Additional native anchor attributes.

### `Source.Content`

- `title`: Title shown in the hover-card preview.
- `description`: Short description shown in the hover-card preview.
- `class`: Additional CSS classes for the hover-card content container.
- `...props`: Additional hover-card content attributes.

## Features

- Derives the domain label automatically when you do not provide one.
- Supports favicon rendering in both the compact chip and the expanded preview.
- Uses a hover-card pattern so citations stay lightweight in the message flow.

## Examples

### Multiple cited sources

```svelte
<script lang="ts">
	import * as Source from "$lib/components/ai/source";
</script>

<div class="flex gap-2">
	<Source.Root href="https://www.figma.com">
		<Source.Trigger />
		<Source.Content title="Figma" description="Figma is a design tool." />
	</Source.Root>

	<Source.Root href="https://www.github.com">
		<Source.Trigger showFavicon label="GitHub" />
		<Source.Content
			title="GitHub"
			description="GitHub is a code hosting platform for version control and collaboration."
		/>
	</Source.Root>
</div>
```
