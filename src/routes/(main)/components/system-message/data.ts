import IndexTsRaw from "$lib/components/ai/system-message/index.ts?raw";
import SystemMessageSvelteRaw from "$lib/components/ai/system-message/system-message.svelte?raw";

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
import WithCta from "./examples/with-cta.svelte";
import WithCtaRaw from "./examples/with-cta.svelte?raw";

export const meta: ComponentMeta = {
	id: "system-message",
	title: "System Message",
	description: "Display contextual information, warnings, or instructions in AI interfaces.",
	category: "ai",
};

const seo: SEO = {
	title: "System Message",
	description: "Display contextual information, warnings, or instructions in AI interfaces.",
	keywords: ["Svelte", "System Message", "Component"],
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
	{
		name: "With CTA Button",
		preview: WithCta,
		code: {
			name: "with-cta.svelte",
			code: WithCtaRaw,
			lang: "svelte",
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	shadcn_components: ['button'],
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true, },
		{ name: "system-message.svelte", code: SystemMessageSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- system-message/\n                |-- index.ts\n                `-- system-message.svelte",
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
