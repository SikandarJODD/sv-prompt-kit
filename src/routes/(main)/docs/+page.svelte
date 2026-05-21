<script lang="ts">
	import { page } from "$app/state";
	import { github_repo } from "$lib/config/repo";
	import CopyPageDropdown from "$lib/components/docs/base/main/copy-page-dropdown.svelte";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import {
		H1,
		H2,
		Paragraph,
		Strong,
		Link,
		UnorderedList,
		ListItem
	} from "$markdown";
	import DiaTextReveal from "$lib/components/magic/dia-text-reveal/dia-text-reveal.svelte";

	let getURLPath = (url: string) => {
		return url.split("?")[0].split("#")[0];
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);
	let licenseUrl = $derived(`${github_repo.url}/blob/main/LICENSE`);
</script>

<Seo
	title="Introduction"
	description="Overview of Svelte Prompt Kit, an open-source collection of AI-focused UI components for Svelte and shadcn-svelte projects."
	keywords={[
		"svelte prompt kit",
		"ai ui",
		"shadcn-svelte",
		"docs",
		"introduction"
	]}
/>

<div class="space-y-8">
	<section class="space-y-3">
		<div
			class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
		>
			<H1 id="introduction">Introduction</H1>
			<CopyPageDropdown componentName="Introduction" {llmsTxtUrl} />
		</div>
		<div class="mt-3 max-w-2xl">
			<Paragraph>
				Svelte Prompt Kit is a collection of customizable, high-quality
				components built specifically for AI applications.
			</Paragraph>
		</div>
	</section>

	<section class="max-w-3xl space-y-3">
		<H2 id="open-source">Open source</H2>
		<Paragraph>
			Svelte Prompt Kit is open source and available under the MIT
			license. Check out the code, report issues, or contribute on <Link
				href={github_repo.url}>GitHub</Link
			>.
		</Paragraph>
	</section>
	<section class="max-w-3xl space-y-3">
		<H2 id="credits">
			<DiaTextReveal text="Credits" delay={0.3}></DiaTextReveal>
		</H2>
		<Paragraph class="items-center">
			Svelte Prompt Kit is inspired by <Link
				href="https://prompt-kit.com"
				target="_blank">Prompt Kit</Link
			>. Built by <Link href="https://x.com/Ibelick" target="_blank"
				>Ibelick</Link
			>
		</Paragraph>
	</section>
</div>
