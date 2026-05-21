import ContextSvelteTsRaw from "$lib/components/ai/reasoning/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/reasoning/index.ts?raw";
import ReasoningContentSvelteRaw from "$lib/components/ai/reasoning/reasoning-content.svelte?raw";
import ReasoningTriggerSvelteRaw from "$lib/components/ai/reasoning/reasoning-trigger.svelte?raw";
import ReasoningSvelteRaw from "$lib/components/ai/reasoning/reasoning.svelte?raw";

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
	id: "reasoning",
	title: "Reasoning",
	description:
		"A collapsible component for showing AI reasoning, explanations, or logic. You can control it manually or let it auto-close when the stream ends. Markdown is supported.",
	category: "ai"
};

const seo: SEO = {
	title: "Reasoning",
	description:
		"A collapsible component for showing AI reasoning, explanations, or logic. You can control it manually or let it auto-close when the stream ends. Markdown is supported.",
	keywords: ["Svelte", "Reasoning", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [
		"mode-watcher",
		"runed",
		"streamdown-svelte",
		"@streamdown-svelte/code"
	],
	install_code: [
		{
			name: "context.svelte.ts",
			code: ContextSvelteTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" },
		{
			name: "reasoning-content.svelte",
			code: ReasoningContentSvelteRaw,
			lang: "svelte"
		},
		{
			name: "reasoning-trigger.svelte",
			code: ReasoningTriggerSvelteRaw,
			lang: "svelte"
		},
		{ name: "reasoning.svelte", code: ReasoningSvelteRaw, lang: "svelte" }
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- reasoning/\n                |-- context.svelte.ts\n                |-- index.ts\n                |-- reasoning-content.svelte\n                |-- reasoning-trigger.svelte\n                `-- reasoning.svelte"
};

const reasoningProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Reasoning trigger and content blocks."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the wrapper."
	},
	{
		name: "open",
		type: "boolean",
		description: "Controlled open state for the collapsible reasoning panel."
	},
	{
		name: "onOpenChange",
		type: "(open: boolean) => void",
		description: "Called when the open state changes."
	},
	{
		name: "isStreaming",
		type: "boolean",
		default: "false",
		description: "Automatically opens while streaming and closes when streaming stops."
	}
];

const reasoningTriggerProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Trigger label content."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the button."
	},
];

const reasoningContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Fallback content rendered when no markdown string is provided."
	},
	{
		name: "content",
		type: "string",
		description: "Markdown string rendered by Streamdown when present."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the outer content wrapper."
	},
	{
		name: "contentClass",
		type: "string",
		description: "Additional CSS classes for the inner markdown container."
	},
	{
		name: "markdown",
		type: "boolean",
		default: "false",
		description: "Reserved for markdown-mode integrations."
	},
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
			name: "Reasoning",
			props: reasoningProps
		},
		{
			name: "ReasoningTrigger",
			props: reasoningTriggerProps
		},
		{
			name: "ReasoningContent",
			props: reasoningContentProps
		},
	]
};
