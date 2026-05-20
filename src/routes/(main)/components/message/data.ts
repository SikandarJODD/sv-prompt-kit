import IndexTsRaw from "$lib/components/ai/message/index.ts?raw";
import MessageActionSvelteRaw from "$lib/components/ai/message/message-action.svelte?raw";
import MessageActionsSvelteRaw from "$lib/components/ai/message/message-actions.svelte?raw";
import MessageContentSvelteRaw from "$lib/components/ai/message/message-content.svelte?raw";
import MessageSvelteRaw from "$lib/components/ai/message/message.svelte?raw";

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
	id: "message",
	title: "Message",
	description: "TODO: Add a concise description for Message.",
	category: "ai",
};

const seo: SEO = {
	title: "Message",
	description: "TODO: Add an SEO description for Message.",
	keywords: ["Svelte", "Message", "Component"],
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
		{ name: "message-action.svelte", code: MessageActionSvelteRaw, lang: "svelte", },
		{ name: "message-actions.svelte", code: MessageActionsSvelteRaw, lang: "svelte", },
		{ name: "message-content.svelte", code: MessageContentSvelteRaw, lang: "svelte", },
		{ name: "message.svelte", code: MessageSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- message/\n                |-- index.ts\n                |-- message-action.svelte\n                |-- message-actions.svelte\n                |-- message-content.svelte\n                `-- message.svelte",
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
