import ChatContainerContentSvelteRaw from "$lib/components/ai/chat-container/chat-container-content.svelte?raw";
import ChatContainerSvelteRaw from "$lib/components/ai/chat-container/chat-container.svelte?raw";
import ContextSvelteTsRaw from "$lib/components/ai/chat-container/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/chat-container/index.ts?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";
import PresetExample from "./examples/preset-example.svelte";
import PresetExampleRaw from "./examples/preset-example.svelte?raw";
import StreamingExample from "./examples/streaming-example.svelte";
import StreamingExampleRaw from "./examples/streaming-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "chat-container",
	title: "Chat Container",
	description: "A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces.",
	category: "ai"
};

const seo: SEO = {
	title: "Chat Container",
	description: "A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces.",
	keywords: ["Svelte", "Chat Container", "Component"]
};

const examples: Example[] = [
	{
		name: "Basic conversation",
		description:
			"A standard message thread that appends assistant follow-ups.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	},
	{
		name: "Streaming response",
		description:
			"A long assistant answer streams into the latest message while the container follows.",
		preview: StreamingExample,
		code: {
			name: "streaming-example.svelte",
			code: StreamingExampleRaw,
			lang: "svelte"
		}
	},
	{
		name: "Preset comparison",
		description:
			"Compare the `smooth` and `ease-out` resize presets with the same message flow.",
		preview: PresetExample,
		code: {
			name: "preset-example.svelte",
			code: PresetExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{
			name: "chat-container-content.svelte",
			code: ChatContainerContentSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "chat-container.svelte",
			code: ChatContainerSvelteRaw,
			lang: "svelte"
		},
		{
			name: "context.svelte.ts",
			code: ContextSvelteTsRaw,
			lang: "typescript"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" }
	],
	folder_structure: `src/
└── lib/
    └── components/
        └── ai/
            └── chat-container/
                ├── chat-container-content.svelte
                ├── chat-container.svelte
                ├── context.svelte.ts
                └── index.ts`
};

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
	examples,
	seo,
	props: []
};
