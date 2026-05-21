import ImageSvelteRaw from "$lib/components/ai/image/image.svelte?raw";
import IndexTsRaw from "$lib/components/ai/image/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "image",
	title: "Image",
	description: "The Image component displays images from base64 or Uint8Array data, supporting all standard HTML image attributes. It is ideal for showing AI-generated images or user uploads in chat and AI apps. Compatible with AI SDK v5 architecture.",
	category: "ai",
};

const seo: SEO = {
	title: "Image",
	description: "Learn about the Image component, which displays images from base64 or Uint8Array data. Perfect for AI-generated images or user uploads in chat and AI apps. Compatible with AI SDK v5 architecture.",
	keywords: ["Svelte", "Image", "Component"],
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "image.svelte", code: ImageSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- image/\n                |-- image.svelte\n                `-- index.ts",
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
