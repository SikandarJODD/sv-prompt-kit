import AiConfigRaw from "$lib/config/ai.ts?raw";
import ChatServerRaw from "../../../../routes/api/chat/+server.ts?raw";
import ErrorMessageSvelteRaw from "./error-message.svelte?raw";
import FullChatbotSvelteRaw from "./full-chatbot.svelte?raw";
import LoadingMessageSvelteRaw from "./loading-message.svelte?raw";
import MessageComponentSvelteRaw from "./message-component.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs
} from "$lib/types/structure";

export const meta: ComponentMeta = {
	id: "full-chatbot",
	title: "Full Chatbot",
	description:
		"A complete AI chatbot setup with frontend chat UI, local AI configuration, and the chat API route.",
	category: "primitives"
};

const seo = {
	title: "Full Chatbot",
	description:
		"A complete AI chatbot setup with frontend chat UI, local AI configuration, and the chat API route.",
	keywords: ["Svelte", "Full Chatbot", "AI", "Chatbot", "Component"]
};

const frontendFiles = [
	{
		name: "full-chatbot.svelte",
		code: FullChatbotSvelteRaw,
		lang: "svelte",
		isExpand: true
	},
	{
		name: "message-component.svelte",
		code: MessageComponentSvelteRaw,
		lang: "svelte"
	},
	{
		name: "loading-message.svelte",
		code: LoadingMessageSvelteRaw,
		lang: "svelte"
	},
	{
		name: "error-message.svelte",
		code: ErrorMessageSvelteRaw,
		lang: "svelte"
	}
] satisfies NonNullable<InstallComponentDocs["install_code"]>;

const aiSetupFiles = [
	{
		name: "ai.ts",
		code: AiConfigRaw,
		lang: "typescript",
		isExpand: false
	}
] satisfies NonNullable<InstallComponentDocs["install_code"]>;

const chatFiles = [
	{
		name: "+server.ts",
		code: ChatServerRaw,
		lang: "typescript",
		isExpand: false
	}
] satisfies NonNullable<InstallComponentDocs["install_code"]>;

export const fileGroups = {
	frontend: frontendFiles,
	aiSetup: aiSetupFiles,
	chat: chatFiles
};

const install_block: InstallComponentDocs = {
	packages: ["ai", "@ai-sdk/svelte", "@openrouter/ai-sdk-provider"],
	shadcn_components: ["button", "textarea", "tooltip"],
	install_code: [...frontendFiles, ...aiSetupFiles, ...chatFiles],
	folder_structure: `
src/
├─ lib/
│  ├─ components/
│  │  ├─ primitives/   
│  │  │  ├─ full-chatbot/
│  │  │  │  ├─ full-chatbot.svelte
│  │  │  │  ├─ message-component.svelte
│  │  │  │  ├─ loading-message.svelte
│  │  │  │  └─ error-message.svelte
│  ├─ config/              // AI configuration file
│  │  └─ ai.ts
├─ routes/
│  ├─ api/
│  │  └─ chat/
│  │     └─ +server.ts    // Chat API route
`
};

export const data: ComponentDoc = {
	...meta,
	install_block,
	seo,
	folder_structure: install_block.folder_structure
};
