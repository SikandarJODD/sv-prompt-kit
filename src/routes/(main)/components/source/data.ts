import ContextSvelteTsRaw from "$lib/components/ai/source/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/source/index.ts?raw";
import SourceContentSvelteRaw from "$lib/components/ai/source/source-content.svelte?raw";
import SourceTriggerSvelteRaw from "$lib/components/ai/source/source-trigger.svelte?raw";
import SourceSvelteRaw from "$lib/components/ai/source/source.svelte?raw";

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
	id: "source",
	title: "Source",
	description: "Displays website sources used by AI-generated content, showing URL details, titles, and descriptions on hover.",
	category: "ai",
};

const seo: SEO = {
	title: "Source",
	description: "Displays website sources used by AI-generated content, showing URL details, titles, and descriptions on hover.",
	keywords: ["Svelte", "Source", "Component"],
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
	shadcn_components: ['hover-card'],
	install_code: [
		{ name: "context.svelte.ts", code: ContextSvelteTsRaw, lang: "typescript", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", },
		{ name: "source-content.svelte", code: SourceContentSvelteRaw, lang: "svelte", },
		{ name: "source-trigger.svelte", code: SourceTriggerSvelteRaw, lang: "svelte", },
		{ name: "source.svelte", code: SourceSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- source/\n                |-- context.svelte.ts\n                |-- index.ts\n                |-- source-content.svelte\n                |-- source-trigger.svelte\n                `-- source.svelte",
};

const sourceProps = [
	{
		name: "href",
		type: "string",
		description: "Source URL shared with nested source trigger/content components."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Trigger and content rendered inside the hover card."
	}
];

const sourceTriggerProps = [
	{
		name: "label",
		type: "string | number",
		description: "Label shown in the source chip. Falls back to the domain."
	},
	{
		name: "showFavicon",
		type: "boolean",
		default: "false",
		description: "Shows the favicon beside the label."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the trigger anchor."
	}
];

const sourceContentProps = [
	{
		name: "title",
		type: "string",
		description: "Source title shown in the hover card."
	},
	{
		name: "description",
		type: "string",
		description: "Source description shown in the hover card."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the hover card content."
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
			name: "Source",
			props: sourceProps
		},
		{
			name: "SourceTrigger",
			props: sourceTriggerProps
		},
		{
			name: "SourceContent",
			props: sourceContentProps
		}
	],
};
