import ContextSvelteTsRaw from "$lib/components/ai/file-upload/context.svelte.ts?raw";
import FileUploadContentSvelteRaw from "$lib/components/ai/file-upload/file-upload-content.svelte?raw";
import FileUploadTriggerSvelteRaw from "$lib/components/ai/file-upload/file-upload-trigger.svelte?raw";
import FileUploadSvelteRaw from "$lib/components/ai/file-upload/file-upload.svelte?raw";
import IndexTsRaw from "$lib/components/ai/file-upload/index.ts?raw";

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
	id: "file-upload",
	title: "File Upload",
	description: "TODO: Add a concise description for File Upload.",
	category: "ai",
};

const seo: SEO = {
	title: "File Upload",
	description: "TODO: Add an SEO description for File Upload.",
	keywords: ["Svelte", "File Upload", "Component"],
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
		{ name: "file-upload-content.svelte", code: FileUploadContentSvelteRaw, lang: "svelte", },
		{ name: "file-upload-trigger.svelte", code: FileUploadTriggerSvelteRaw, lang: "svelte", },
		{ name: "file-upload.svelte", code: FileUploadSvelteRaw, lang: "svelte", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- file-upload/\n                |-- context.svelte.ts\n                |-- file-upload-content.svelte\n                |-- file-upload-trigger.svelte\n                |-- file-upload.svelte\n                `-- index.ts",
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
