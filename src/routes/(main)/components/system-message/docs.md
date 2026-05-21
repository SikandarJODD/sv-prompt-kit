# System Message

Display contextual information, warnings, and operational notices in AI interfaces. It supports built-in visual variants, optional custom icons, and a compact call-to-action button when the user needs to take the next step.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/system-message.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/system-message` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { SystemMessage } from "$lib/components/ai/system-message";
</script>

<SystemMessage variant="warning" fill>
	Context window is close to the limit. Summarize the conversation or archive older messages.
</SystemMessage>
```

## Props

### `SystemMessage`

- `variant`: Visual tone. Defaults to `"action"`. Supported values are `"action"`, `"warning"`, and `"error"`.
- `fill`: Defaults to `false`. Applies a filled background style instead of an outlined treatment.
- `icon`: Optional custom icon snippet.
- `isIconHidden`: Defaults to `false`. Hides the default or custom icon.
- `cta`: Optional action button config with `label`, optional `onClick`, and optional button `variant`.
- `children`: Message content.
- `class`: Additional CSS classes for the root container.
- `...props`: Additional native `div` attributes.

## Features

- Ships with action, warning, and error variants that map cleanly to common AI system states.
- Shows a sensible default icon for each variant while still allowing a custom icon snippet.
- Supports inline CTAs for policy review, retry flows, or configuration fixes.

## Examples

### With CTA

```svelte
<script lang="ts">
	import ShieldCheck from "@lucide/svelte/icons/shield-check";
	import { SystemMessage } from "$lib/components/ai/system-message";
</script>

<SystemMessage
	variant="action"
	fill
	cta={{ label: "Review policy", variant: "default" }}
>
	{#snippet icon()}
		<ShieldCheck class="size-4 h-lh" />
	{/snippet}
	This workspace enforces human review before customer-facing responses are sent.
</SystemMessage>
```
