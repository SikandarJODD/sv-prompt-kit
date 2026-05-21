import IndexTsRaw from "$lib/components/ai/prompt-suggestion/index.ts?raw";
import PromptSuggestionSvelteRaw from "$lib/components/ai/prompt-suggestion/prompt-suggestion.svelte?raw";

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
	id: "prompt-suggestion",
	title: "Prompt Suggestion",
	description: "A component for implementing interactive prompt suggestions in AI interfaces, with both clickable suggestion buttons and highlight mode for matched text.",
	category: "ai",
};

const seo: SEO = {
	title: "Prompt Suggestion",
	description: "A component for implementing interactive prompt suggestions in AI interfaces, with both clickable suggestion buttons and highlight mode for matched text.",
	keywords: ["Svelte", "Prompt Suggestion", "Component"],
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
		{ name: "prompt-suggestion.svelte", code: PromptSuggestionSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- prompt-suggestion/\n                |-- index.ts\n                `-- prompt-suggestion.svelte",
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
