import ChatContainer from "./chat-container.svelte";
import ChatContainerContent from "./chat-container-content.svelte";
import {
	getChatContainerContext,
	type ChatContainerAnimation,
	type ChatContainerAnimationPreset,
	type ChatContainerContext,
	type ChatContainerInitialAnimation,
	type ChatContainerScrollToBottomOptions,
	type ChatContainerSpringAnimation
} from "./context.svelte";

export {
	ChatContainer,
	ChatContainerContent,
	getChatContainerContext,
	//
	ChatContainer as Root,
	ChatContainerContent as Content
};

export type {
	ChatContainerAnimation,
	ChatContainerAnimationPreset,
	ChatContainerContext,
	ChatContainerInitialAnimation,
	ChatContainerScrollToBottomOptions,
	ChatContainerSpringAnimation
};
