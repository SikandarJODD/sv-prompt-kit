import IndexTsRaw from "$lib/components/ai/steps/index.ts?raw";
import StepsBarSvelteRaw from "$lib/components/ai/steps/steps-bar.svelte?raw";
import StepsContentSvelteRaw from "$lib/components/ai/steps/steps-content.svelte?raw";
import StepsItemSvelteRaw from "$lib/components/ai/steps/steps-item.svelte?raw";
import StepsTriggerSvelteRaw from "$lib/components/ai/steps/steps-trigger.svelte?raw";
import StepsSvelteRaw from "$lib/components/ai/steps/steps.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "steps",
	title: "Steps",
	description: "Displays a sequence of operations in a collapsible layout. Each step can include details and an optional vertical bar. Useful for showing AI steps like reasoning traces, tool calls, or process logs.",
	category: "ai",
};

const seo: SEO = {
	title: "Steps",
	description: "Displays a sequence of operations in a collapsible layout. Each step can include details and an optional vertical bar. Useful for showing AI steps like reasoning traces, tool calls, or process logs.",
	keywords: ["Svelte", "Steps", "Component"],
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

const install_block: InstallComponentDocs = {
	packages: [],
	shadcn_components: ['collapsible'],
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "steps-bar.svelte", code: StepsBarSvelteRaw, lang: "svelte", },
		{ name: "steps-content.svelte", code: StepsContentSvelteRaw, lang: "svelte", },
		{ name: "steps-item.svelte", code: StepsItemSvelteRaw, lang: "svelte", },
		{ name: "steps-trigger.svelte", code: StepsTriggerSvelteRaw, lang: "svelte", },
		{ name: "steps.svelte", code: StepsSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- steps/\n                |-- index.ts\n                |-- steps-bar.svelte\n                |-- steps-content.svelte\n                |-- steps-item.svelte\n                |-- steps-trigger.svelte\n                `-- steps.svelte",
};

const stepsProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Nested steps content rendered inside the collapsible wrapper."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the wrapper."
	},
	{
		name: "defaultOpen",
		type: "boolean",
		default: "true",
		description: "Initial open state when the component is uncontrolled."
	},
	{
		name: "open",
		type: "boolean",
		description: "Controlled open state for the collapsible steps list."
	}
];

const stepsBarProps = [
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the vertical bar."
	}
];

const stepsContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Expanded step details rendered beside the bar."
	},
	{
		name: "bar",
		type: "Snippet",
		description: "Custom bar content rendered instead of the default `StepsBar`."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the collapsible content."
	}
];

const stepsItemProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Step item content."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the step item."
	}
];

const stepsTriggerProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Trigger label content."
	},
	{
		name: "leftIcon",
		type: "Snippet",
		description: "Optional icon rendered before the label."
	},
	{
		name: "swapIconOnHover",
		type: "boolean",
		default: "true",
		description: "Swaps the left icon for the chevron on hover."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the trigger."
	}
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	install_block,
	examples,
	seo,
	props: [
		{
			name: "Steps",
			props: stepsProps
		},
		{
			name: "StepsBar",
			props: stepsBarProps
		},
		{
			name: "StepsContent",
			props: stepsContentProps
		},
		{
			name: "StepsItem",
			props: stepsItemProps
		},
		{
			name: "StepsTrigger",
			props: stepsTriggerProps
		}
	],
};
