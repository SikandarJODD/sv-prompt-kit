import ContextSvelteTsRaw from "$lib/components/ai/file-upload/context.svelte.ts?raw";
import FileUploadContentSvelteRaw from "$lib/components/ai/file-upload/file-upload-content.svelte?raw";
import FileUploadTriggerSvelteRaw from "$lib/components/ai/file-upload/file-upload-trigger.svelte?raw";
import FileUploadSvelteRaw from "$lib/components/ai/file-upload/file-upload.svelte?raw";
import IndexTsRaw from "$lib/components/ai/file-upload/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "file-upload",
	title: "File Upload",
	description:
		"A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.",
	category: "ai"
};

const seo: SEO = {
	title: "File Upload",
	description:
		"A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.",
	keywords: ["Svelte", "File Upload", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "context.svelte.ts",
			code: ContextSvelteTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "file-upload-content.svelte",
			code: FileUploadContentSvelteRaw,
			lang: "svelte"
		},
		{
			name: "file-upload-trigger.svelte",
			code: FileUploadTriggerSvelteRaw,
			lang: "svelte"
		},
		{ name: "file-upload.svelte", code: FileUploadSvelteRaw, lang: "svelte" },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- file-upload/
                |-- context.svelte.ts
                |-- file-upload-content.svelte
                |-- file-upload-trigger.svelte
                |-- file-upload.svelte
                \`-- index.ts`
};

const fileUploadProps = [
	{
		name: "onFilesAdded",
		type: "(files: File[]) => void",
		description: "Called after the user selects or drops files."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Upload trigger, content overlay, and surrounding UI."
	},
	{
		name: "multiple",
		type: "boolean",
		default: "true",
		description: "Allow selecting more than one file."
	},
	{
		name: "accept",
		type: "string",
		description: 'Accepted file types, for example `".png,.pdf"`.'
	},
	{
		name: "disabled",
		type: "boolean",
		default: "false",
		description: "Disable drag-and-drop handling and file input activation."
	}
];

const fileUploadTriggerProps = [
	{
		name: "asChild",
		type: "boolean",
		default: "false",
		description: "Render the trigger behavior on a wrapper element instead of a native button."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Trigger label, icon, or custom button content."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the trigger wrapper or button."
	},
	{
		name: "onclick",
		type: "(event: MouseEvent) => void",
		description: "Optional click handler called after the file input is opened."
	}
];

const fileUploadContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Overlay content shown while files are being dragged over the window."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the drag overlay."
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
			name: "FileUpload",
			props: fileUploadProps
		},
		{
			name: "FileUploadTrigger",
			props: fileUploadTriggerProps
		},
		{
			name: "FileUploadContent",
			props: fileUploadContentProps
		}
	]
};
