# Text Shimmer

An animated shimmer effect for loading labels, status text, and AI thinking indicators. It works as a small typography primitive rather than a fixed loader so you can apply it to inline text, headings, or any other semantic element.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/text-shimmer.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/text-shimmer` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { TextShimmer } from "$lib/components/ai/text-shimmer";
</script>

<TextShimmer duration={4} spread={20}>
	Thinking through the request...
</TextShimmer>
```

## Props

### `TextShimmer`

- `as`: HTML element to render. Defaults to `"span"`.
- `duration`: Animation duration in seconds. Defaults to `4`.
- `spread`: Highlight spread. Clamped between `5` and `45`. Defaults to `20`.
- `children`: Text or snippet content to display.
- `class`: Additional CSS classes for the rendered element.
- `...props`: Additional native attributes for the chosen HTML element.

## Features

- Works with semantic elements like `span`, `p`, and `h2` through the `as` prop.
- Clamps the shimmer spread to a safe range so the effect stays readable.
- Uses a lightweight text-only animation, which is a better fit for inline status labels than a full spinner.

## Examples

### Different shimmer speeds

```svelte
<script lang="ts">
	import { TextShimmer } from "$lib/components/ai/text-shimmer";
</script>

<TextShimmer duration={2} spread={30}>
	Fast shimmer with wide spread
</TextShimmer>

<TextShimmer as="h2" class="text-2xl font-bold" duration={6} spread={10}>
	Heading with shimmer effect
</TextShimmer>
```
