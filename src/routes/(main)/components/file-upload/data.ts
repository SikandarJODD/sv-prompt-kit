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
	description: "A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.",
	category: "ai",
};

const seo: SEO = {
	title: "File Upload",
	description: "A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.",
	keywords: ["Svelte", "File Upload", "Component"],
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "context.svelte.ts", code: ContextSvelteTsRaw, lang: "typescript", isExpand: true, },
		{ name: "file-upload-content.svelte", code: FileUploadContentSvelteRaw, lang: "svelte", },
		{ name: "file-upload-trigger.svelte", code: FileUploadTriggerSvelteRaw, lang: "svelte", },
		{ name: "file-upload.svelte", code: FileUploadSvelteRaw, lang: "svelte", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: `src/
└── lib/
    └── components/
        └── ai/
            └── file-upload/
                ├── file-upload-content.svelte
                ├── file-upload-trigger.svelte
                ├── file-upload.svelte
                └── index.ts`,
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
	seo,
	props: [],
};
