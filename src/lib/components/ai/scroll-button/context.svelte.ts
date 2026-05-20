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

type ScrollButtonAnimationPreset = "instant" | keyof typeof SPRING_PRESETS;
type ScrollButtonSpringAnimation = {
	damping?: number;
	stiffness?: number;
	mass?: number;
};
type ScrollButtonAnimation =
	| ScrollButtonAnimationPreset
	| ScrollButtonSpringAnimation;
type ScrollButtonInitialAnimation = ScrollButtonAnimation | false;
type ResolvedAnimation = "instant" | Required<ScrollButtonSpringAnimation>;
type ScrollButtonScrollToBottomOptions =
	| "instant"
	| {
			animation?: ScrollButtonAnimation;
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
	animation: ScrollButtonAnimation
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
	animation: ScrollButtonInitialAnimation
): ResolvedAnimation | false {
	if (animation === false) {
		return false;
	}

	return normalizeAnimation(animation);
}

class ScrollButtonContext {
	#scrollElement: HTMLElement | null = $state(null);
	#contentElement: HTMLElement | null = $state(null);
	#options: MutableStickToBottomOptions;
	#stickToBottom: StickToBottom;

	constructor(
		resize: ScrollButtonAnimation = "smooth",
		initial: ScrollButtonInitialAnimation = "instant"
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

	updateResize(animation: ScrollButtonAnimation) {
		this.#options.resize = normalizeAnimation(animation);
	}

	updateInitial(animation: ScrollButtonInitialAnimation) {
		this.#options.initial = normalizeInitialAnimation(animation);
	}

	scrollToBottom = (options?: ScrollButtonScrollToBottomOptions) => {
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

const [getInternalScrollButtonContext, setInternalScrollButtonContext] =
	createContext<ScrollButtonContext>();

function getScrollButtonContext(): ScrollButtonContext {
	try {
		return getInternalScrollButtonContext();
	} catch {
		throw new Error(
			"ScrollButton context not found. Render `ScrollButton.Button` inside `ScrollButton.Root`."
		);
	}
}

function setScrollButtonContext(
	resize: ScrollButtonAnimation = "smooth",
	initial: ScrollButtonInitialAnimation = "instant"
): ScrollButtonContext {
	const context = new ScrollButtonContext(resize, initial);
	setInternalScrollButtonContext(context);
	return context;
}

export { ScrollButtonContext, getScrollButtonContext, setScrollButtonContext };
export type {
	ScrollButtonAnimation,
	ScrollButtonAnimationPreset,
	ScrollButtonInitialAnimation,
	ScrollButtonScrollToBottomOptions,
	ScrollButtonSpringAnimation
};
