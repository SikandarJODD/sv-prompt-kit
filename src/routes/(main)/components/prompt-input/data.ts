import ContextSvelteTsRaw from "$lib/components/ai/prompt-input/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/prompt-input/index.ts?raw";
import PromptInputActionSvelteRaw from "$lib/components/ai/prompt-input/prompt-input-action.svelte?raw";
import PromptInputActionsSvelteRaw from "$lib/components/ai/prompt-input/prompt-input-actions.svelte?raw";
import PromptInputTextareaSvelteRaw from "$lib/components/ai/prompt-input/prompt-input-textarea.svelte?raw";
import PromptInputSvelteRaw from "$lib/components/ai/prompt-input/prompt-input.svelte?raw";

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
	id: "prompt-input",
	title: "Prompt Input",
	description: "An input field that allows users to enter and submit text to an AI model.",
	category: "ai",
};

const seo: SEO = {
	title: "Prompt Input",
	description: "An input field that allows users to enter and submit text to an AI model.",
	keywords: ["Svelte", "Prompt Input", "Component"],
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
	shadcn_components:['tooltip', 'textarea', 'button'],
	install_code: [
		{ name: "context.svelte.ts", code: ContextSvelteTsRaw, lang: "typescript", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", },
		{ name: "prompt-input-action.svelte", code: PromptInputActionSvelteRaw, lang: "svelte", },
		{ name: "prompt-input-actions.svelte", code: PromptInputActionsSvelteRaw, lang: "svelte", },
		{ name: "prompt-input-textarea.svelte", code: PromptInputTextareaSvelteRaw, lang: "svelte", },
		{ name: "prompt-input.svelte", code: PromptInputSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- prompt-input/\n                |-- context.svelte.ts\n                |-- index.ts\n                |-- prompt-input-action.svelte\n                |-- prompt-input-actions.svelte\n                |-- prompt-input-textarea.svelte\n                `-- prompt-input.svelte",
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
