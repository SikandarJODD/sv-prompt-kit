# Loader

A loading component with multiple visual variants for chat, reasoning, and general AI pending states. It gives you a single API for swapping between animated spinners, text loaders, and terminal-style indicators.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/loader.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/loader` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { Loader } from "$lib/components/ai/loader";
</script>

<Loader variant="circular" size="md" />
<Loader variant="text-shimmer" text="Thinking..." />
```

## Props

### `Loader`

- `variant`: Defaults to `"circular"`. Supported values are `"circular"`, `"classic"`, `"pulse"`, `"pulse-dot"`, `"dots"`, `"typing"`, `"wave"`, `"bars"`, `"terminal"`, `"text-blink"`, `"text-shimmer"`, and `"loading-dots"`.
- `size`: Defaults to `"md"`. Shared size token for the selected loader.
- `text`: Optional label used by text-based variants.
- `class`: Additional CSS classes passed to the selected loader variant.

## Features

- Exposes one component API across spinner, pulse, wave, and text-based loading styles.
- Shares consistent size tokens so you can switch variants without rewriting layout code.
- Supports text-driven loaders for conversational or reasoning states where a plain spinner feels too generic.

## Examples

### Variant comparison

The bundled demo compares every supported variant across `sm`, `md`, and `lg` sizes.

```svelte
<script lang="ts">
	import { Loader } from "$lib/components/ai/loader";

	const variants = ["circular", "pulse", "bars", "text-shimmer"] as const;
</script>

{#each variants as variant}
	<div class="flex items-center gap-3">
		<Loader {variant} size="md" text="Loading..." />
		<span>{variant}</span>
	</div>
{/each}
```
