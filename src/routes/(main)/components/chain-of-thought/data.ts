import ChainOfThoughtContentSvelteRaw from "$lib/components/ai/chain-of-thought/chain-of-thought-content.svelte?raw";
import ChainOfThoughtItemSvelteRaw from "$lib/components/ai/chain-of-thought/chain-of-thought-item.svelte?raw";
import ChainOfThoughtStepSvelteRaw from "$lib/components/ai/chain-of-thought/chain-of-thought-step.svelte?raw";
import ChainOfThoughtTriggerSvelteRaw from "$lib/components/ai/chain-of-thought/chain-of-thought-trigger.svelte?raw";
import ChainOfThoughtSvelteRaw from "$lib/components/ai/chain-of-thought/chain-of-thought.svelte?raw";
import IndexTsRaw from "$lib/components/ai/chain-of-thought/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "chain-of-thought",
	title: "Chain Of Thought",
	description:
		"Display step-by-step reasoning and collapsible thought processes in AI interfaces.",
	category: "ai"
};

const seo: SEO = {
	title: "Chain Of Thought",
	description:
		"Display step-by-step reasoning and collapsible thought processes in AI interfaces.",
	keywords: ["Svelte", "Chain Of Thought", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		description:
			"Build a multi-step reasoning trace with collapsible sections and inline detail items.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	shadcn_components: ["collapsible"],
	install_code: [
		{
			name: "chain-of-thought-content.svelte",
			code: ChainOfThoughtContentSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "chain-of-thought-item.svelte",
			code: ChainOfThoughtItemSvelteRaw,
			lang: "svelte"
		},
		{
			name: "chain-of-thought-step.svelte",
			code: ChainOfThoughtStepSvelteRaw,
			lang: "svelte"
		},
		{
			name: "chain-of-thought-trigger.svelte",
			code: ChainOfThoughtTriggerSvelteRaw,
			lang: "svelte"
		},
		{
			name: "chain-of-thought.svelte",
			code: ChainOfThoughtSvelteRaw,
			lang: "svelte"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- chain-of-thought/
                |-- chain-of-thought-content.svelte
                |-- chain-of-thought-item.svelte
                |-- chain-of-thought-step.svelte
                |-- chain-of-thought-trigger.svelte
                |-- chain-of-thought.svelte
                \`-- index.ts`
};

const chainOfThoughtProps = [
	{
		name: "children",
		type: "Snippet",
		description: "One or more `ChainOfThoughtStep` blocks."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the wrapper."
	}
];

const chainOfThoughtStepProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Typically a trigger followed by matching content."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the step wrapper."
	},
	{
		name: "...props",
		type: "CollapsiblePrimitive.RootProps",
		description: "Additional Bits UI collapsible root props, including controlled `open` state."
	}
];

const chainOfThoughtTriggerProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Trigger label content."
	},
	{
		name: "leftIcon",
		type: "Snippet",
		description: "Optional icon shown before the label."
	},
	{
		name: "swapIconOnHover",
		type: "boolean",
		default: "true",
		description: "When a left icon is present, swap it with the chevron on hover."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the trigger."
	},
	{
		name: "...props",
		type: "CollapsiblePrimitive.TriggerProps",
		description: "Additional Bits UI collapsible trigger props."
	}
];

const chainOfThoughtContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Expanded detail rows for the current step."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the collapsible content."
	},
	{
		name: "...props",
		type: "CollapsiblePrimitive.ContentProps",
		description: "Additional Bits UI collapsible content props."
	}
];

const chainOfThoughtItemProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Text or custom markup for a reasoning item."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the item."
	},
	{
		name: "...props",
		type: "HTMLAttributes<HTMLDivElement>",
		description: "Additional native div attributes."
	}
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	examples,
	seo,
	props: [
		{
			name: "ChainOfThought",
			props: chainOfThoughtProps
		},
		{
			name: "ChainOfThoughtStep",
			props: chainOfThoughtStepProps
		},
		{
			name: "ChainOfThoughtTrigger",
			props: chainOfThoughtTriggerProps
		},
		{
			name: "ChainOfThoughtContent",
			props: chainOfThoughtContentProps
		},
		{
			name: "ChainOfThoughtItem",
			props: chainOfThoughtItemProps
		}
	]
};
