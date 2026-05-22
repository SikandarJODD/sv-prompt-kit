import type { Component } from "svelte";
import type { CodeBlock } from "$lib/types/code";
import type { SEO } from "$lib/types/seo";
import {
	BasicFullConversation,
	ConversationWithActions,
	ConversationWithPromptInput,
	ConversationWithScroll,
	PromptInputWithActions,
	PromptInputWithAutocomplete,
	PromptInputWithSuggestions
} from "$lib/components/blocks";

import PromptInputWithActionsRaw from "$lib/components/blocks/prompt-input-with-actions.svelte?raw";
import PromptInputWithAutocompleteRaw from "$lib/components/blocks/prompt-input-with-autocomplete.svelte?raw";
import PromptInputWithSuggestionsRaw from "$lib/components/blocks/prompt-input-with-suggestions.svelte?raw";
import BasicFullConversationRaw from "$lib/components/blocks/basic-full-conversation.svelte?raw";
import ConversationWithActionsRaw from "$lib/components/blocks/conversation-with-actions.svelte?raw";
import ConversationWithScrollRaw from "$lib/components/blocks/conversation-with-scroll.svelte?raw";
import ConversationWithPromptInputRaw from "$lib/components/blocks/conversation-with-prompt-input.svelte?raw";

export type BlockShowcaseItem = {
	id: string;
	title: string;
	component: Component;
	code: CodeBlock;
	installPath: string;
	previewClass?: string;
};

export const seo: SEO = {
	title: "Blocks",
	description:
		"Reusable block-level examples built from Svelte Prompt Kit AI components.",
	keywords: ["svelte prompt kit", "blocks", "ai ui blocks", "svelte examples"]
};

export const pageData = {
	title: "Blocks",
	description:
		"Block-level examples that combine Prompt Kit components into ready-to-copy UI patterns."
};

export const blocks: BlockShowcaseItem[] = [
	{
		id: "prompt-input-with-actions",
		title: "Prompt Input With Actions",
		component: PromptInputWithActions,
		code: {
			name: "prompt-input-with-actions.svelte",
			code: PromptInputWithActionsRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/prompt-input-with-actions.json",
		previewClass: "min-h-[260px]"
	},
	{
		id: "prompt-input-with-autocomplete",
		title: "Prompt Input With Autocomplete",
		component: PromptInputWithAutocomplete,
		code: {
			name: "prompt-input-with-autocomplete.svelte",
			code: PromptInputWithAutocompleteRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/prompt-input-with-autocomplete.json",
		previewClass: "min-h-[320px]"
	},
	{
		id: "prompt-input-with-suggestions",
		title: "Prompt Input With Suggestions",
		component: PromptInputWithSuggestions,
		code: {
			name: "prompt-input-with-suggestions.svelte",
			code: PromptInputWithSuggestionsRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/prompt-input-with-suggestions.json",
		previewClass: "min-h-[380px]"
	},
	{
		id: "basic-full-conversation",
		title: "Basic Full Conversation",
		component: BasicFullConversation,
		code: {
			name: "basic-full-conversation.svelte",
			code: BasicFullConversationRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/basic-full-conversation.json"
	},
	{
		id: "conversation-with-actions",
		title: "Conversation With Actions",
		component: ConversationWithActions,
		code: {
			name: "conversation-with-actions.svelte",
			code: ConversationWithActionsRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/conversation-with-actions.json"
	},
	{
		id: "conversation-with-scroll",
		title: "Conversation With Scroll",
		component: ConversationWithScroll,
		code: {
			name: "conversation-with-scroll.svelte",
			code: ConversationWithScrollRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/conversation-with-scroll.json"
	},
	{
		id: "conversation-with-prompt-input",
		title: "Conversation With Prompt Input",
		component: ConversationWithPromptInput,
		code: {
			name: "conversation-with-prompt-input.svelte",
			code: ConversationWithPromptInputRaw,
			lang: "svelte",
			isExpand: true
		},
		installPath: "/r/blocks/conversation-with-prompt-input.json"
	}
];
