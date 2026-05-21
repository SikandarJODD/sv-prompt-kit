import ImageSvelteRaw from "$lib/components/ai/image/image.svelte?raw";
import IndexTsRaw from "$lib/components/ai/image/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "image",
	title: "Image",
	description:
		"The Image component displays images from base64 or Uint8Array data, supporting all standard HTML image attributes. It is ideal for showing AI-generated images or user uploads in chat and AI apps. Compatible with AI SDK v5 architecture.",
	category: "ai"
};

const seo: SEO = {
	title: "Image",
	description:
		"The Image component displays images from base64 or Uint8Array data. It is ideal for AI-generated images, binary image responses, and uploaded media previews.",
	keywords: ["Svelte", "Image", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "image.svelte",
			code: ImageSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- image/
                |-- image.svelte
                \`-- index.ts`
};

const imageProps = [
	{
		name: "base64",
		type: "string",
		description: "Base64-encoded image data used to build a data URL."
	},
	{
		name: "uint8Array",
		type: "Uint8Array",
		description: "Binary image data converted into an object URL."
	},
	{
		name: "mediaType",
		type: "string",
		default: '"image/png"',
		description: "MIME type used with `base64` or `uint8Array` input."
	},
	{
		name: "alt",
		type: "string",
		description: "Required alternative text for the rendered image or placeholder."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the image or fallback placeholder."
	},
	{
		name: "...props",
		type: "Omit<HTMLImgAttributes, 'src' | 'alt' | 'class'>",
		description: "Additional native image attributes forwarded to the `<img>` element."
	}
];

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true
	},
	install_block,
	seo,
	props: [
		{
			name: "Image",
			props: imageProps
		}
	]
};
