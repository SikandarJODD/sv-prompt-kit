# Scroll Button

A floating jump control for scrollable feeds that appears when the reader moves away from the bottom. It is useful for chat transcripts, activity feeds, and log viewers where new items arrive below the viewport.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/scroll-button.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Install the dependency first, then copy the files from `src/lib/components/ai/scroll-button`.

```bash
pnpm add stick-to-bottom-svelte
```

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as ScrollButton from "$lib/components/ai/scroll-button";
</script>

<ScrollButton.Root class="h-80 flex-col">
	<ScrollButton.Content class="p-4 pb-20">
		<!-- scrollable content -->
	</ScrollButton.Content>

	<div class="pointer-events-none sticky right-0 bottom-4 mt-auto flex justify-end px-4">
		<ScrollButton.Button class="pointer-events-auto" />
	</div>
</ScrollButton.Root>
```

## Props

### `ScrollButton.Root`

- `ref`: Bindable reference to the scrollable root element.
- `children`: The content area and the floating button layout.
- `class`: Additional CSS classes for the scroll container.
- `resize`: Defaults to `"smooth"`. Controls how the container reacts when content height changes.
- `initial`: Defaults to `"instant"`. Controls the initial stick-to-bottom behavior.
- `...props`: Additional native `div` attributes.

### `ScrollButton.Content`

- `children`: Scrollable content rendered inside the tracked element.
- `class`: Additional CSS classes for the content wrapper.
- `...props`: Additional native `div` attributes.

### `ScrollButton.Button`

- `variant`: Button variant. Defaults to `"outline"`.
- `size`: Button size. Defaults to `"sm"`.
- `class`: Additional CSS classes for the floating button.
- `ref`: Bindable reference to the rendered button.
- `onclick`: Optional click handler called after scrolling to the bottom.

## Features

- Hides itself when the reader is already at the bottom and reappears when they scroll up.
- Reuses the same bottom-locking behavior as the chat container through `stick-to-bottom-svelte`.
- Splits the API into `Root`, `Content`, and `Button` primitives so the floating control can be positioned however you want.

## Examples

### Variant switching

The bundled examples include both a basic feed and a variant switcher for the floating button.

```svelte
<script lang="ts">
	import * as ScrollButton from "$lib/components/ai/scroll-button";
</script>

<ScrollButton.Root class="h-full flex-col">
	<ScrollButton.Content class="flex w-full flex-col p-4 pb-24">
		<div class="border-b p-3">Item 1</div>
		<div class="border-b p-3">Item 2</div>
		<div class="border-b p-3">Item 3</div>
	</ScrollButton.Content>

	<div class="pointer-events-none sticky right-0 bottom-4 mt-auto flex justify-end px-6">
		<ScrollButton.Button variant="secondary" class="pointer-events-auto shadow-sm" />
	</div>
</ScrollButton.Root>
```
