# Steps

Display a sequence of operations in a collapsible layout. `Steps` is useful for reasoning traces, tool-call logs, multi-stage workflows, and status panels where you want one-line summaries with expandable detail.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/steps.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/steps` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as Steps from "$lib/components/ai/steps";
</script>

<Steps.Root defaultOpen>
	<Steps.Trigger>Web search: modern LLM UI patterns</Steps.Trigger>
	<Steps.Content>
		<Steps.Item>Searching curated sources...</Steps.Item>
		<Steps.Item>Extracting the most relevant sections...</Steps.Item>
	</Steps.Content>
</Steps.Root>
```

## Props

### `Steps.Root`

- `defaultOpen`: Defaults to `true`. Initial open state for uncontrolled usage.
- `open`: Optional controlled open state.
- `class`: Additional CSS classes for the collapsible root.
- `children`: The trigger and content primitives rendered inside the step.

### `Steps.Trigger`

- `class`: Additional CSS classes for the trigger.
- `leftIcon`: Optional snippet rendered before the label.
- `swapIconOnHover`: Defaults to `true`. Swaps the left icon for the chevron on hover.
- `children`: Trigger label content.

### `Steps.Content`

- `class`: Additional CSS classes for the collapsible content area.
- `bar`: Optional snippet for a custom vertical bar.
- `children`: Expanded content shown under the trigger.

### `Steps.Item`

- `children`: Text or markup for one row inside the expanded content.
- `class`: Additional CSS classes for the item.
- `...props`: Additional native `div` attributes.

### `Steps.Bar`

- `class`: Additional CSS classes for the vertical bar.
- `...props`: Additional native `div` attributes.

## Features

- Pairs a concise one-line summary with expandable detail rows.
- Lets you replace the default vertical bar or leading icon when a different visual treatment is needed.
- Uses small primitives so it can represent a single trace step or a full multi-step workflow.

## Examples

### Tool or search trace

```svelte
<script lang="ts">
	import * as Steps from "$lib/components/ai/steps";
</script>

<Steps.Root defaultOpen>
	<Steps.Trigger>Tool call: summarize release notes</Steps.Trigger>
	<Steps.Content>
		<Steps.Item>Loading the release notes from the repository...</Steps.Item>
		<Steps.Item>Extracting breaking changes and migration steps...</Steps.Item>
		<Steps.Item>Formatting the final summary...</Steps.Item>
	</Steps.Content>
</Steps.Root>
```
