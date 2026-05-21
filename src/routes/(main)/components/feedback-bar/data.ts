import FeedbackBarSvelteRaw from "$lib/components/ai/feedback-bar/feedback-bar.svelte?raw";
import IndexTsRaw from "$lib/components/ai/feedback-bar/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
	id: "feedback-bar",
	title: "Feedback Bar",
	description:
		"A compact feedback prompt for AI responses with helpful, not helpful, and dismiss actions.",
	category: "ai"
};

const seo: SEO = {
	title: "Feedback Bar",
	description:
		"A compact feedback prompt for AI responses with helpful, not helpful, and dismiss actions.",
	keywords: ["Svelte", "Feedback Bar", "Component"]
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "feedback-bar.svelte",
			code: FeedbackBarSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- feedback-bar/
                |-- feedback-bar.svelte
                \`-- index.ts`
};

const feedbackBarProps = [
	{
		name: "title",
		type: "string",
		description: "Label shown next to the action buttons."
	},
	{
		name: "icon",
		type: "Snippet",
		description: "Optional leading icon snippet rendered before the title."
	},
	{
		name: "onHelpful",
		type: "() => void",
		description: "Called when the thumbs-up button is clicked."
	},
	{
		name: "onNotHelpful",
		type: "() => void",
		description: "Called when the thumbs-down button is clicked."
	},
	{
		name: "onClose",
		type: "() => void",
		description: "Called when the close button is clicked."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the outer wrapper."
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
			name: "FeedbackBar",
			props: feedbackBarProps
		}
	]
};
