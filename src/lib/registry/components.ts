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
	desc?: string;
}

let components: Component[] = [
	{
		id: "chain-of-thought",
		name: "Chain Of Thought",
		href: "/components/chain-of-thought",
		desc: "TODO: Add a concise description for Chain Of Thought."
	},
	{
		id: "chat-container",
		name: "Chat Container",
		href: "/components/chat-container",
		desc: "TODO: Add a concise description for Chat Container."
	},
	{
		id: "feedback-bar",
		name: "Feedback Bar",
		href: "/components/feedback-bar",
		desc: "TODO: Add a concise description for Feedback Bar."
	},
	{
		id: "file-upload",
		name: "File Upload",
		href: "/components/file-upload",
		desc: "TODO: Add a concise description for File Upload."
	},
	{
		id: "image",
		name: "Image",
		href: "/components/image",
		desc: "TODO: Add a concise description for Image."
	},
	{
		id: "loader",
		name: "Loader",
		href: "/components/loader",
		desc: "TODO: Add a concise description for Loader."
	},
	{
		id: "markdown",
		name: "Markdown",
		href: "/components/markdown",
		desc: "TODO: Add a concise description for Markdown."
	},
	{
		id: "message",
		name: "Message",
		href: "/components/message",
		desc: "TODO: Add a concise description for Message."
	},
	{
		id: "prompt-input",
		name: "Prompt Input",
		href: "/components/prompt-input",
		desc: "TODO: Add a concise description for Prompt Input."
	},
	{
		id: "prompt-suggestion",
		name: "Prompt Suggestion",
		href: "/components/prompt-suggestion",
		desc: "TODO: Add a concise description for Prompt Suggestion."
	},
	{
		id: "reasoning",
		name: "Reasoning",
		href: "/components/reasoning",
		desc: "TODO: Add a concise description for Reasoning."
	},
	{
		id: "scroll-button",
		name: "Scroll Button",
		href: "/components/scroll-button",
		desc: "A floating jump-to-bottom control for scrollable feeds and chat-style threads."
	},
	{
		id: "source",
		name: "Source",
		href: "/components/source",
		desc: "TODO: Add a concise description for Source."
	},
	{
		id: "steps",
		name: "Steps",
		href: "/components/steps",
		desc: "TODO: Add a concise description for Steps."
	},
	{
		id: "system-message",
		name: "System Message",
		href: "/components/system-message",
		desc: "TODO: Add a concise description for System Message."
	},
	{
		id: "text-shimmer",
		name: "Text Shimmer",
		href: "/components/text-shimmer",
		desc: "TODO: Add a concise description for Text Shimmer."
	},
	{
		id: "thinking-bar",
		name: "Thinking Bar",
		href: "/components/thinking-bar",
		desc: "TODO: Add a concise description for Thinking Bar."
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

type NavigationItem = DocPage | Component;

function getNavigationItems(): NavigationItem[] {
	return [...docsPages, ...components];
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
