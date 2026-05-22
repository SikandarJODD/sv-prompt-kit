export type BadgeType = "New" | "Updated" | "Beta";

export interface Component {
	id: string;
	name: string;
	href: string;
	badge?: BadgeType;
	desc?: string;
}

export interface DocPage {
	id: string;
	name: string;
	href: string;
	badge?: BadgeType;
	desc?: string;
}

let components: Component[] = [
	{
		id: "chain-of-thought",
		name: "Chain Of Thought",
		href: "/components/chain-of-thought",
		desc: "Display step-by-step reasoning and collapsible thought processes in AI interfaces"
	},
	{
		id: "chat-container",
		name: "Chat Container",
		href: "/components/chat-container",
		desc: "A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth experience in conversation interfaces."
	},
	{
		id: "feedback-bar",
		name: "Feedback Bar",
		href: "/components/feedback-bar",
		desc: "A component to collect user feedback on AI responses."
	},
	{
		id: "file-upload",
		name: "File Upload",
		href: "/components/file-upload",
		desc: "A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations."
	},
	{
		id: "image",
		name: "Image",
		href: "/components/image",
		desc: "The Image component displays images from base64 or Uint8Array data, supporting all standard HTML image attributes. "
	},
	{
		id: "loader",
		name: "Loader",
		href: "/components/loader",
		desc: "A loading component with multiple variants to indicate processing states and provide visual feedback to users during wait times."
	},
	{
		id: "markdown",
		name: "Markdown",
		href: "/components/markdown",
		desc: "A component for rendering Markdown content with support for GitHub Flavored Markdown (GFM) and custom component styling."
	},
	{
		id: "message",
		name: "Message",
		href: "/components/message",
		desc: "A component for displaying messages in a conversation interface, with support for avatars, markdown content, and interactive actions."
	},
	{
		id: "prompt-input",
		name: "Prompt Input",
		href: "/components/prompt-input",
		desc: "An AI Input that allows users to enter and submit text to an AI model."
	},
	{
		id: "prompt-suggestion",
		name: "Prompt Suggestion",
		href: "/components/prompt-suggestion",
		desc: "A component for implementing interactive prompt suggestions in AI interfaces."
	},
	{
		id: "reasoning",
		name: "Reasoning",
		href: "/components/reasoning",
		desc: "A collapsible component for showing AI reasoning, explanations, or logic. "
	},
	{
		id: "scroll-button",
		name: "Scroll Button",
		href: "/components/scroll-button",
		desc: "A minimal floating button that appears when the user scrolls up, allowing them to jump back to the bottom of the chat."
	},
	{
		id: "source",
		name: "Source",
		href: "/components/source",
		desc: "Displays website sources used by AI-generated content, showing URL details, titles, and descriptions on hover."
	},
	{
		id: "steps",
		name: "Steps",
		href: "/components/steps",
		desc: "Displays a sequence of operations in a collapsible layout. Each step can include details and an optional vertical bar. "
	},
	{
		id: "system-message",
		name: "System Message",
		href: "/components/system-message",
		desc: "Display contextual information, warnings, or instructions in AI interfaces."
	},
	{
		id: "text-shimmer",
		name: "Text Shimmer",
		href: "/components/text-shimmer",
		desc: "An animated text shimmer effect for loading states and AI responses."
	},
	{
		id: "thinking-bar",
		name: "Thinking Bar",
		href: "/components/thinking-bar",
		desc: "A component to display the thinking state of an AI model with optional actions."
	}
];

export { components };

let docsPages: DocPage[] = [
	{
		id: "docs",
		name: "Introduction",
		href: "/docs",
		desc: "Overview of Svelte Prompt Kit and its AI-focused component philosophy."
	},
	{
		id: "installation",
		name: "Installation",
		href: "/docs/installation",
		desc: "Set up SvelteKit, initialize shadcn-svelte, and add your first Prompt Kit component."
	}
];

export { docsPages };

let primitivePages: DocPage[] = [
	{
		id: "full-chatbot",
		name: "Full Chatbot",
		href: "/primitives/full-chatbot",
		desc: "A full AI chatbot setup with UI, model config, and API route wiring."
	}
];

export { primitivePages };

let blockPages: DocPage[] = [
	{
		id: "blocks",
		name: "Blocks",
		href: "/blocks",
		desc: "Composable block-level examples built from Prompt Kit components."
	}
];

export { blockPages };

type NavigationItem = DocPage | Component;

function getNavigationItems(): NavigationItem[] {
	return [...docsPages, ...primitivePages, ...blockPages, ...components];
}

export function getPrevNext(id: string): {
	prev: NavigationItem | null;
	next: NavigationItem | null;
} {
	let items = getNavigationItems();
	let index = items.findIndex((item) => item.id === id);
	if (index === -1) return { prev: null, next: null };
	return {
		prev: index > 0 ? items[index - 1] : null,
		next: index < items.length - 1 ? items[index + 1] : null
	};
}
