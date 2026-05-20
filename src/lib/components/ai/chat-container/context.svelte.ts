import { createContext } from "svelte";
import { StickToBottom } from "stick-to-bottom-svelte";

const DEFAULT_SPRING = {
	damping: 0.7,
	stiffness: 0.05,
	mass: 1.25
} as const;

const SPRING_PRESETS = {
	smooth: DEFAULT_SPRING,
	"ease-out": {
		damping: 0.82,
		stiffness: 0.045,
		mass: 1.2
	}
} as const;

type ChatContainerAnimationPreset = "instant" | keyof typeof SPRING_PRESETS;
type ChatContainerSpringAnimation = {
	damping?: number;
	stiffness?: number;
	mass?: number;
};
type ChatContainerAnimation =
	| ChatContainerAnimationPreset
	| ChatContainerSpringAnimation;
type ChatContainerInitialAnimation = ChatContainerAnimation | false;
type ResolvedAnimation = "instant" | Required<ChatContainerSpringAnimation>;
type ChatContainerScrollToBottomOptions =
	| "instant"
	| {
			animation?: ChatContainerAnimation;
			wait?: boolean | number;
			ignoreEscapes?: boolean;
			preserveScrollPosition?: boolean;
			duration?: number | Promise<void>;
	  };

type MutableStickToBottomOptions = {
	scrollElement: () => HTMLElement | null;
	contentElement: () => HTMLElement | null;
	resize: ResolvedAnimation;
	initial: ResolvedAnimation | false;
};

function normalizeAnimation(
	animation: ChatContainerAnimation
): ResolvedAnimation {
	if (animation === "instant") {
		return "instant";
	}

	if (typeof animation === "string") {
		return { ...SPRING_PRESETS[animation] };
	}

	return {
		...DEFAULT_SPRING,
		...animation
	};
}

function normalizeInitialAnimation(
	animation: ChatContainerInitialAnimation
): ResolvedAnimation | false {
	if (animation === false) {
		return false;
	}

	return normalizeAnimation(animation);
}

class ChatContainerContext {
	#scrollElement: HTMLElement | null = $state(null);
	#contentElement: HTMLElement | null = $state(null);
	#options: MutableStickToBottomOptions;
	#stickToBottom: StickToBottom;

	constructor(
		resize: ChatContainerAnimation = "smooth",
		initial: ChatContainerInitialAnimation = "instant"
	) {
		this.#options = {
			scrollElement: () => this.#scrollElement,
			contentElement: () => this.#contentElement,
			resize: normalizeAnimation(resize),
			initial: normalizeInitialAnimation(initial)
		};

		this.#stickToBottom = new StickToBottom(this.#options);
	}

	get isAtBottom() {
		return this.#stickToBottom.isAtBottom;
	}

	get isNearBottom() {
		return this.#stickToBottom.isNearBottom;
	}

	get scrollTop() {
		return this.#stickToBottom.scrollTop;
	}

	get targetScrollTop() {
		return this.#stickToBottom.targetScrollTop;
	}

	setScrollElement(element: HTMLElement | null) {
		this.#scrollElement = element;
	}

	setContentElement(element: HTMLElement | null) {
		this.#contentElement = element;
	}

	updateResize(animation: ChatContainerAnimation) {
		this.#options.resize = normalizeAnimation(animation);
	}

	updateInitial(animation: ChatContainerInitialAnimation) {
		this.#options.initial = normalizeInitialAnimation(animation);
	}

	scrollToBottom = (options?: ChatContainerScrollToBottomOptions) => {
		if (options === undefined) {
			return this.#stickToBottom.scrollToBottom({
				animation: this.#options.resize
			});
		}

		if (options === "instant") {
			return this.#stickToBottom.scrollToBottom("instant");
		}

		return this.#stickToBottom.scrollToBottom({
			...options,
			animation: options.animation
				? normalizeAnimation(options.animation)
				: undefined
		});
	};

	stopScroll = () => {
		this.#stickToBottom.stopScroll();
	};
}

const [getChatContainerContext, setInternalChatContainerContext] =
	createContext<ChatContainerContext>();

function setChatContainerContext(
	resize: ChatContainerAnimation = "smooth",
	initial: ChatContainerInitialAnimation = "instant"
): ChatContainerContext {
	const context = new ChatContainerContext(resize, initial);
	setInternalChatContainerContext(context);
	return context;
}

export {
	ChatContainerContext,
	getChatContainerContext,
	setChatContainerContext
};
export type {
	ChatContainerAnimation,
	ChatContainerAnimationPreset,
	ChatContainerInitialAnimation,
	ChatContainerScrollToBottomOptions,
	ChatContainerSpringAnimation
};
