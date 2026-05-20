import ContextSvelteTsRaw from "$lib/components/ai/scroll-button/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/scroll-button/index.ts?raw";
import ScrollButtonSvelteRaw from "$lib/components/ai/scroll-button/scroll-button.svelte?raw";

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
	id: "scroll-button",
	title: "Scroll Button",
	description: "TODO: Add a concise description for Scroll Button.",
	category: "ai",
};

const seo: SEO = {
	title: "Scroll Button",
	description: "TODO: Add an SEO description for Scroll Button.",
	keywords: ["Svelte", "Scroll Button", "Component"],
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
		{ name: "context.svelte.ts", code: ContextSvelteTsRaw, lang: "typescript", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", },
		{ name: "scroll-button.svelte", code: ScrollButtonSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- scroll-button/\n                |-- context.svelte.ts\n                |-- index.ts\n                `-- scroll-button.svelte",
};

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
	props: [],
};
