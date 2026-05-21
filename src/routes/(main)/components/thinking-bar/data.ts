import IndexTsRaw from "$lib/components/ai/thinking-bar/index.ts?raw";
import ThinkingBarSvelteRaw from "$lib/components/ai/thinking-bar/thinking-bar.svelte?raw";

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
	id: "thinking-bar",
	title: "Thinking Bar",
	description:
		"A component to display the thinking state of an AI model with optional actions.",
	category: "ai"
};

const seo: SEO = {
	title: "Thinking Bar",
	description: "A component to display the thinking state of an AI model with optional actions.",
	keywords: ["Svelte", "Thinking Bar", "Component"],
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
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "thinking-bar.svelte", code: ThinkingBarSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- thinking-bar/\n                |-- index.ts\n                `-- thinking-bar.svelte",
};

const thinkingBarProps = [
	{
		name: "text",
		type: "string",
		default: '"Thinking"',
		description: "Text shown in the shimmer label."
	},
	{
		name: "stopLabel",
		type: "string",
		default: '"Answer now"',
		description: "Label used for the stop button."
	},
	{
		name: "onStop",
		type: "() => void",
		description: "Called when the stop button is clicked."
	},
	{
		name: "onclick",
		type: "() => void",
		description: "Called when the thinking text itself is clicked."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the wrapper."
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
			name: "ThinkingBar",
			props: thinkingBarProps
		}
	],
};
