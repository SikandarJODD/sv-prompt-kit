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
	shadcn_components: ["button"],
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "prompt-suggestion.svelte", code: PromptSuggestionSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- prompt-suggestion/\n                |-- index.ts\n                `-- prompt-suggestion.svelte",
};

const promptSuggestionProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Button label or custom content rendered inside the suggestion."
	},
	{
		name: "variant",
		type: "ButtonVariant",
		description: "Button style variant when rendered as a suggestion."
	},
	{
		name: "size",
		type: "ButtonSize",
		description: "Button size used for the suggestion."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the button."
	},
	{
		name: "highlight",
		type: "string",
		description: "When set, highlights the matching substring in the content."
	},
	{
		name: "ref",
		type: "HTMLElement | null",
		description: "Bindable reference to the rendered button element."
	},
	{
		name: "onclick",
		type: "(event: MouseEvent) => void",
		description: "Called when the suggestion is clicked."
	},
	{
		name: "disabled",
		type: "boolean",
		description: "Disables the button."
	},
	{
		name: "type",
		type: '"button" | "submit" | "reset"',
		default: '"button"',
		description: "Native button type."
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
			name: "PromptSuggestion",
			props: promptSuggestionProps
		}
	],
};
