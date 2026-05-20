# Scroll Button

A floating jump control for scrollable feeds that appears when the reader moves away from the bottom.

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

Install the dependency and copy the component source files into your project.

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

  <div
    class="pointer-events-none sticky right-0 bottom-4 mt-auto flex justify-end px-4"
  >
    <ScrollButton.Button class="pointer-events-auto" />
  </div>
</ScrollButton.Root>
```

## Props

`ScrollButton.Root` accepts `resize` and `initial` animation props matching the underlying `stick-to-bottom-svelte` behavior.

## Features

- Uses `stick-to-bottom-svelte` to keep bottom detection and jump behavior consistent with chat-style feeds.
- Exposes a provider-based `Root` / `Content` / `Button` API so the control works as a standalone primitive.
- `ScrollButton.Button` must be rendered inside `ScrollButton.Root`.
