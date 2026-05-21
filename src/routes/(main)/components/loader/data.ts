import BarsLoaderSvelteRaw from "$lib/components/ai/loader/bars-loader.svelte?raw";
import CircularLoaderSvelteRaw from "$lib/components/ai/loader/circular-loader.svelte?raw";
import ClassicLoaderSvelteRaw from "$lib/components/ai/loader/classic-loader.svelte?raw";
import DotsLoaderSvelteRaw from "$lib/components/ai/loader/dots-loader.svelte?raw";
import IndexTsRaw from "$lib/components/ai/loader/index.ts?raw";
import LoaderSvelteRaw from "$lib/components/ai/loader/loader.svelte?raw";
import PulseDotLoaderSvelteRaw from "$lib/components/ai/loader/pulse-dot-loader.svelte?raw";
import PulseLoaderSvelteRaw from "$lib/components/ai/loader/pulse-loader.svelte?raw";
import TerminalLoaderSvelteRaw from "$lib/components/ai/loader/terminal-loader.svelte?raw";
import TextBlinkLoaderSvelteRaw from "$lib/components/ai/loader/text-blink-loader.svelte?raw";
import TextDotsLoaderSvelteRaw from "$lib/components/ai/loader/text-dots-loader.svelte?raw";
import TextShimmerLoaderSvelteRaw from "$lib/components/ai/loader/text-shimmer-loader.svelte?raw";
import TypingLoaderSvelteRaw from "$lib/components/ai/loader/typing-loader.svelte?raw";
import WaveLoaderSvelteRaw from "$lib/components/ai/loader/wave-loader.svelte?raw";

import type {
	ComponentDoc,
	ComponentMeta,
	InstallComponentDocs,
} from "$lib/types/structure";
import type { Example } from "$lib/types/example";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import DemoExample from "./examples/demo-example.svelte";
import DemoExampleRaw from "./examples/demo-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "loader",
	title: "Loader",
	description: "A loading component with multiple variants to indicate processing states and provide visual feedback to users during wait times.",
	category: "ai",
};

const seo: SEO = {
	title: "Loader",
	description: "A loading component with multiple variants to indicate processing states and provide visual feedback to users during wait times.",
	keywords: ["Svelte", "Loader", "Component"],
};

const examples: Example[] = [
	{
		name: "Demo",
		preview: DemoExample,
		code: {
			name: "demo-example.svelte",
			code: DemoExampleRaw,
			lang: "svelte",
		},
	},
];

const install_block: InstallComponentDocs = {
	packages: [],
	install_code: [
		{ name: "bars-loader.svelte", code: BarsLoaderSvelteRaw, lang: "svelte", isExpand: true, },
		{ name: "circular-loader.svelte", code: CircularLoaderSvelteRaw, lang: "svelte", },
		{ name: "classic-loader.svelte", code: ClassicLoaderSvelteRaw, lang: "svelte", },
		{ name: "dots-loader.svelte", code: DotsLoaderSvelteRaw, lang: "svelte", },
		{ name: "index.ts", code: IndexTsRaw, lang: "typescript", },
		{ name: "loader.svelte", code: LoaderSvelteRaw, lang: "svelte", },
		{ name: "pulse-dot-loader.svelte", code: PulseDotLoaderSvelteRaw, lang: "svelte", },
		{ name: "pulse-loader.svelte", code: PulseLoaderSvelteRaw, lang: "svelte", },
		{ name: "terminal-loader.svelte", code: TerminalLoaderSvelteRaw, lang: "svelte", },
		{ name: "text-blink-loader.svelte", code: TextBlinkLoaderSvelteRaw, lang: "svelte", },
		{ name: "text-dots-loader.svelte", code: TextDotsLoaderSvelteRaw, lang: "svelte", },
		{ name: "text-shimmer-loader.svelte", code: TextShimmerLoaderSvelteRaw, lang: "svelte", },
		{ name: "typing-loader.svelte", code: TypingLoaderSvelteRaw, lang: "svelte", },
		{ name: "wave-loader.svelte", code: WaveLoaderSvelteRaw, lang: "svelte", }
	],
	folder_structure: "src/\n`-- lib/\n    `-- components/\n        `-- ai/\n            `-- loader/\n                |-- bars-loader.svelte\n                |-- circular-loader.svelte\n                |-- classic-loader.svelte\n                |-- dots-loader.svelte\n                |-- index.ts\n                |-- loader.svelte\n                |-- pulse-dot-loader.svelte\n                |-- pulse-loader.svelte\n                |-- terminal-loader.svelte\n                |-- text-blink-loader.svelte\n                |-- text-dots-loader.svelte\n                |-- text-shimmer-loader.svelte\n                |-- typing-loader.svelte\n                `-- wave-loader.svelte",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	preview_code: {
		name: "preview.svelte",
		code: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	install_block,
	examples,
	seo,
	props: [],
};
