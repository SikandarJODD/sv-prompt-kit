import ContextSvelteTsRaw from "$lib/components/ai/scroll-button/context.svelte.ts?raw";
import IndexTsRaw from "$lib/components/ai/scroll-button/index.ts?raw";
import ScrollButtonContentSvelteRaw from "$lib/components/ai/scroll-button/scroll-button-content.svelte?raw";
import ScrollButtonRootSvelteRaw from "$lib/components/ai/scroll-button/scroll-button-root.svelte?raw";
import ScrollButtonSvelteRaw from "$lib/components/ai/scroll-button/scroll-button.svelte?raw";

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
import VariantExample from "./examples/variant-example.svelte";
import VariantExampleRaw from "./examples/variant-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "scroll-button",
	title: "Scroll Button",
	description:
		"A minimal floating button that appears when the user scrolls up, allowing them to jump back to the bottom of the chat.",
	category: "ai"
};

const seo: SEO = {
	title: "Scroll Button",
	description:
		"Build a standalone Svelte scroll-to-bottom control with provider-based layout and smart bottom detection.",
	keywords: ["Svelte", "Scroll Button", "Stick To Bottom", "Component"]
};

const examples: Example[] = [
	{
		name: "Basic usage",
		description:
			"The original standalone scroll-area example rewritten to use `ScrollButton.Root`, `ScrollButton.Content`, and `ScrollButton.Button`.",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte"
		}
	},
	{
		name: "Variant switching",
		description:
			"Toggle the button variant at runtime while keeping the scroll behavior unchanged.",
		preview: VariantExample,
		code: {
			name: "variant-example.svelte",
			code: VariantExampleRaw,
			lang: "svelte"
		}
	},
];

const install_block: InstallComponentDocs = {
	packages: ["stick-to-bottom-svelte"],
	shadcn_components: ["button"],
	install_code: [
		{
			name: "scroll-button-content.svelte",
			code: ScrollButtonContentSvelteRaw,
			lang: "svelte",
			isExpand: true
		},
		{
			name: "scroll-button-root.svelte",
			code: ScrollButtonRootSvelteRaw,
			lang: "svelte"
		},
		{
			name: "context.svelte.ts",
			code: ContextSvelteTsRaw,
			lang: "typescript"
		},
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript" },
		{
			name: "scroll-button.svelte",
			code: ScrollButtonSvelteRaw,
			lang: "svelte"
		}
	],
	folder_structure:
		"src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- scroll-button/\n                |-- context.svelte.ts\n                |-- index.ts\n                |-- scroll-button-content.svelte\n                |-- scroll-button-root.svelte\n                `-- scroll-button.svelte"
};

const scrollButtonProps = [
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the button."
	},
	{
		name: "variant",
		type: "ButtonVariant",
		default: '"outline"',
		description: "Button variant used for the scroll control."
	},
	{
		name: "size",
		type: "ButtonSize",
		default: '"sm"',
		description: "Button size used for the scroll control."
	},
	{
		name: "ref",
		type: "HTMLElement | null",
		description: "Bindable reference to the rendered button element."
	},
	{
		name: "onclick",
		type: "(event: MouseEvent) => void",
		description: "Called after scrolling to the bottom."
	}
];

const scrollButtonRootProps = [
	{
		name: "ref",
		type: "HTMLDivElement | null",
		description: "Bindable reference to the scroll container."
	},
	{
		name: "children",
		type: "Snippet",
		description: "Scrollable content rendered inside the root."
	},
	{
		name: "class",
		type: "string",
		description: "Additional CSS classes for the scroll container."
	},
	{
		name: "resize",
		type: "ScrollButtonAnimation",
		default: '"smooth"',
		description: "Animation used when the scroll area resizes."
	},
	{
		name: "initial",
		type: "ScrollButtonInitialAnimation",
		default: '"instant"',
		description: "Initial animation used when mounting the scroll area."
	}
];

const scrollButtonContentProps = [
	{
		name: "children",
		type: "Snippet",
		description: "Scrollable content area rendered inside the wrapper."
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
			name: "ScrollButton",
			props: scrollButtonProps
		},
		{
			name: "ScrollButtonRoot",
			props: scrollButtonRootProps
		},
		{
			name: "ScrollButtonContent",
			props: scrollButtonContentProps
		}
	]
};
