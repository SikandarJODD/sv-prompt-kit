import IndexTsRaw from "$lib/components/ai/message/index.ts?raw";
import MessageActionSvelteRaw from "$lib/components/ai/message/message-action.svelte?raw";
import MessageActionsSvelteRaw from "$lib/components/ai/message/message-actions.svelte?raw";
import MessageContentSvelteRaw from "$lib/components/ai/message/message-content.svelte?raw";
import MessageSvelteRaw from "$lib/components/ai/message/message.svelte?raw";

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

export const meta: ComponentMeta = {
	id: "message",
	title: "Message",
	description:
		"A component for displaying messages in a conversation interface, with support for avatars, markdown content, and interactive actions.",
	category: "ai"
};

const seo: SEO = {
	title: "Message",
	description:
		"A component for displaying messages in a conversation interface, with support for avatars, markdown content, and interactive actions.",
	keywords: ["Svelte", "Message", "Component"]
};

const examples: Example[] = [
	{
		name: "Demo",
		description:
			"Compose a chat bubble with markdown rendering and follow-up actions beneath the message.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	}
];

const install_block: InstallComponentDocs = {
	packages: [],
	shadcn_components: ["tooltip"],
	install_code: [
		{
			name: "index.ts",
			code: IndexTsRaw,
			lang: "typescript",
			isExpand: true
		},
		{
			name: "message-action.svelte",
			code: MessageActionSvelteRaw,
			lang: "svelte"
		},
		{
			name: "message-actions.svelte",
			code: MessageActionsSvelteRaw,
			lang: "svelte"
		},
		{
			name: "message-content.svelte",
			code: MessageContentSvelteRaw,
			lang: "svelte"
		},
		{ name: "message.svelte", code: MessageSvelteRaw, lang: "svelte" }
	],
	folder_structure: `src/
\`-- lib/
    \`-- components/
        \`-- ai/
            \`-- message/
                |-- index.ts
                |-- message-action.svelte
                |-- message-actions.svelte
                |-- message-content.svelte
                \`-- message.svelte`
};

const messageProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Message body content such as text, actions, or other UI."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the message row."
	}
];

const messageContentProps = [
	{
		name: "content",
		type: "string",
		description: "String content used when `markdown` mode is enabled."
	},
	{
		name: "markdown",
		type: "boolean",
		default: "false",
		description: "Render `content` through the `Markdown` component instead of rendering snippet children."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Custom content rendered when `markdown` is false."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the message bubble."
	}
];

const messageActionsProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Action buttons or controls shown beneath a message."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the actions row."
	}
];

const messageActionProps = [
	{
		name: "tooltip",
		type: "Snippet",
		description: "Tooltip content rendered for the action trigger."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Interactive element that opens the tooltip."
	},
	{
		name: "side",
		type: '"top" | "bottom" | "left" | "right"',
		default: '"top"',
		description: "Tooltip placement relative to the trigger."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the tooltip content."
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
			name: "Message",
			props: messageProps
		},
		{
			name: "MessageContent",
			props: messageContentProps
		},
		{
			name: "MessageActions",
			props: messageActionsProps
		},
		{
			name: "MessageAction",
			props: messageActionProps
		}
	]
};
