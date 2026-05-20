import ChatContainerContentSvelteRaw from "$lib/components/ai/chat-container/chat-container-content.svelte?raw";
import ChatContainerSvelteRaw from "$lib/components/ai/chat-container/chat-container.svelte?raw";
import ContextSvelteTsRaw from "$lib/components/ai/chat-container/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/chat-container/index.ts?raw";

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
	id: "chat-container",
	title: "Chat Container",
	description: "TODO: Add a concise description for Chat Container.",
	category: "ai",
};

const seo: SEO = {
	title: "Chat Container",
	description: "TODO: Add an SEO description for Chat Container.",
	keywords: ["Svelte", "Chat Container", "Component"],
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
		{ name: "chat-container-content.svelte", code: ChatContainerContentSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "chat-container.svelte", code: ChatContainerSvelteRaw, lang: "svelte", },
		{ name: "context.svelte.ts", code: ContextSvelteTsRaw, lang: "typescript", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- chat-container/\n                |-- chat-container-content.svelte\n                |-- chat-container.svelte\n                |-- context.svelte.ts\n                `-- index.ts",
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
