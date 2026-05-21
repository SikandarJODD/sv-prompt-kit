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
	description:
		"A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces.",
	category: "ai"
};

const seo: SEO = {
	title: "Chat Container",
	description:
		"A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces.",
	keywords: ["Svelte", "Chat Container", "Component"]
};

const examples: Example[] = [
	{
		name: "Basic conversation",
		description:
			"A standard message list wrapped in the auto-scrolling container primitives.",
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
			"Stream new assistant text into the latest message while the container keeps pace near the bottom.",
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
			"Compare the built-in `smooth` and `ease-out` resize animations with identical message content.",
		preview: PresetExample,
		code: {
			name: "preset-example.svelte",
			code: PresetExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: ["stick-to-bottom-svelte"],
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
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- chat-container/
                |-- chat-container-content.svelte
                |-- chat-container.svelte
                |-- context.svelte.ts
                \`-- index.ts`
};

const chatContainerRootProps = [
	{
		name: "ref",
		type: "HTMLDivElement | null",
		description: "Bindable reference to the scrollable root element."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Message list and any overlay controls rendered inside the scroll area."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the scroll container."
	},
	{
		name: "resize",
		type: '"instant" | "smooth" | "ease-out" | { damping?: number; stiffness?: number; mass?: number }',
		default: '"smooth"',
		description: "Animation used when content height changes while sticking to the bottom."
	},
	{
		name: "initial",
		type: 'false | "instant" | "smooth" | "ease-out" | { damping?: number; stiffness?: number; mass?: number }',
		default: '"instant"',
		description: "Initial scroll behavior applied when the container first measures content."
	}
];

const chatContainerContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Message content rendered inside the tracked content element."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the content wrapper."
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
	examples,
	seo,
	props: [
		{
			name: "ChatContainer.Root",
			props: chatContainerRootProps
		},
		{
			name: "ChatContainer.Content",
			props: chatContainerContentProps
		}
	]
};
