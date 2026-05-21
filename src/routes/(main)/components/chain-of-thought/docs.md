# Chain Of Thought

Display step-by-step reasoning and collapsible thought processes in AI interfaces. The component is split into small primitives so you can compose research steps, analysis notes, or tool traces without hard-coding the layout.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/chain-of-thought.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/chain-of-thought` into your project and keep the exported primitive structure intact.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as ChainOfThought from "$lib/components/ai/chain-of-thought";
	import Search from "@lucide/svelte/icons/search";
</script>

<ChainOfThought.Root>
	<ChainOfThought.Step>
		<ChainOfThought.Trigger>
			{#snippet leftIcon()}
				<Search class="size-4" />
			{/snippet}
			Research phase
		</ChainOfThought.Trigger>

		<ChainOfThought.Content>
			<ChainOfThought.Item>
				Gather the problem constraints and current limitations.
			</ChainOfThought.Item>
			<ChainOfThought.Item>
				Identify the fastest path to a verifiable solution.
			</ChainOfThought.Item>
		</ChainOfThought.Content>
	</ChainOfThought.Step>
</ChainOfThought.Root>
```

## Props

### `ChainOfThought.Root`

- `children`: One or more `ChainOfThought.Step` blocks.
- `class`: Additional CSS classes for the wrapper.

### `ChainOfThought.Step`

- `children`: Typically a trigger followed by matching content.
- `class`: Additional CSS classes for the step wrapper.
- `...props`: Additional Bits UI collapsible root props, including controlled `open` state.

### `ChainOfThought.Trigger`

- `children`: Trigger label content.
- `leftIcon`: Optional icon shown before the label.
- `swapIconOnHover`: Defaults to `true`. Swaps the left icon with the chevron on hover.
- `class`: Additional CSS classes for the trigger.
- `...props`: Additional Bits UI collapsible trigger props.

### `ChainOfThought.Content`

- `children`: Expanded detail rows for the current step.
- `class`: Additional CSS classes for the collapsible content.
- `...props`: Additional Bits UI collapsible content props.

### `ChainOfThought.Item`

- `children`: Text or custom markup for a reasoning item.
- `class`: Additional CSS classes for the item.
- `...props`: Additional native `div` attributes.

## Features

- Ships as composable primitives instead of a single locked layout.
- Uses collapsible sections so long reasoning traces stay compact by default.
- Supports optional leading icons and hover icon swapping for clearer step states.

## Examples

### Demo

The bundled demo shows a multi-step reasoning flow with separate research and analysis phases.

```svelte
<script lang="ts">
	import * as ChainOfThought from "$lib/components/ai/chain-of-thought";
	import Lightbulb from "@lucide/svelte/icons/lightbulb";
</script>

<ChainOfThought.Root>
	<ChainOfThought.Step>
		<ChainOfThought.Trigger>
			{#snippet leftIcon()}
				<Lightbulb class="size-4" />
			{/snippet}
			Analysis
		</ChainOfThought.Trigger>

		<ChainOfThought.Content>
			<ChainOfThought.Item>
				Look for bottlenecks in the current search pipeline.
			</ChainOfThought.Item>
			<ChainOfThought.Item>
				Prioritize fixes with measurable latency impact.
			</ChainOfThought.Item>
		</ChainOfThought.Content>
	</ChainOfThought.Step>
</ChainOfThought.Root>
```
