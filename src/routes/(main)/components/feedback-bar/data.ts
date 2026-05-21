import FeedbackBarSvelteRaw from "$lib/components/ai/feedback-bar/feedback-bar.svelte?raw";
import IndexTsRaw from "$lib/components/ai/feedback-bar/index.ts?raw";

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
	id: "feedback-bar",
	title: "Feedback Bar",
	description: "A component to collect user feedback on AI responses.",
	category: "ai",
};

const seo: SEO = {
	title: "Feedback Bar",
	description: "A component to collect user feedback on AI responses.",
	keywords: ["Svelte", "Feedback Bar", "Component"],
};

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "feedback-bar.svelte", code: FeedbackBarSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", }
	],
	folder_structure: `src/
└── lib/
    └── components/
        └── ai/
            └── feedback-bar/
                ├── feedback-bar.svelte
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
