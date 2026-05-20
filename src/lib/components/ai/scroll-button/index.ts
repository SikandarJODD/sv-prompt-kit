import ScrollButton from "./scroll-button.svelte";
import ScrollButtonContent from "./scroll-button-content.svelte";
import ScrollButtonRoot from "./scroll-button-root.svelte";
import {
	getScrollButtonContext,
	type ScrollButtonAnimation,
	type ScrollButtonAnimationPreset,
	type ScrollButtonContext,
	type ScrollButtonInitialAnimation,
	type ScrollButtonScrollToBottomOptions,
	type ScrollButtonSpringAnimation
} from "./context.svelte";

export {
	ScrollButton,
	ScrollButtonContent,
	ScrollButtonRoot,
	getScrollButtonContext,
	//
	ScrollButton as Button,
	ScrollButtonRoot as Root,
	ScrollButtonContent as Content
};

export type {
	ScrollButtonAnimation,
	ScrollButtonAnimationPreset,
	ScrollButtonContext,
	ScrollButtonInitialAnimation,
	ScrollButtonScrollToBottomOptions,
	ScrollButtonSpringAnimation
};
