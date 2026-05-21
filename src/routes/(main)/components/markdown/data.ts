import IndexTsRaw from "$lib/components/ai/markdown/index.ts?raw";
import MarkdownSvelteRaw from "$lib/components/ai/markdown/markdown.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "markdown",
	title: "Markdown",
	description:
		"A component for rendering Markdown content with support for GitHub Flavored Markdown (GFM) and custom component styling.",
	category: "ai"
};

const seo: SEO = {
	title: "Markdown",
	description:
		"A component for rendering Markdown content with support for GitHub Flavored Markdown (GFM) and custom component styling.",
	keywords: ["Svelte", "Markdown", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", isExpand: true },
		{ name: "markdown.svelte", code: MarkdownSvelteRaw, lang: "svelte" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- markdown/
                |-- index.ts
                \`-- markdown.svelte`
};

const markdownProps = [
	{
		name: "content",
		type: "string",
		description: "Markdown source string rendered with Streamdown."
	},
	{
		name: "id",
		type: "string",
		description: "Optional id applied to the outer wrapper."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the outer markdown container."
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
			name: "Markdown",
			props: markdownProps
		}
	]
};
