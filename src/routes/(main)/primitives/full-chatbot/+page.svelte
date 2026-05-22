<script lang="ts">
	import { page } from "$app/state";
	import FullChatbot from "$lib/components/primitives/full-chatbot/full-chatbot.svelte";
	import CopyPageDropdown from "$lib/components/docs/base/main/copy-page-dropdown.svelte";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import Badge from "$lib/components/ui/spell/badge/badge.svelte";
	import { MultipleSelectFiles, SingleFile } from "$lib/components/ui/code";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import { H1, H2, Paragraph, Step, Steps } from "$markdown";
	import { data as pageData } from "./data";

	let getURLPath = (url: string) => {
		return url.split("?")[0].split("#")[0];
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);

	const folderStructureCode = {
		name: "folder-structure",
		code: pageData.folderStructure.trim(),
		lang: "bash" as const,
		hideLines: true
	};
</script>

<Seo
	title={pageData.seo.title}
	description={pageData.seo.description}
	keywords={pageData.seo.keywords}
/>

<div class="space-y-8">
	<section class="space-y-3">
		<div
			class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
		>
			<div class="flex items-center gap-3">
				<H1 id="full-chatbot">{pageData.title}</H1>
			</div>
			<CopyPageDropdown componentName={pageData.title} {llmsTxtUrl} />
		</div>

		<div class="mt-3 max-w-2xl">
			<Paragraph>{pageData.description}</Paragraph>
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="showcase">Showcase</H2>
		<Paragraph>
			This is the real component wired to the current
			<code>/api/chat</code> route.
		</Paragraph>

		<div class="overflow-hidden rounded-2xl border bg-card">
			<FullChatbot />
		</div>
	</section>

	<section class="space-y-4">
		<H2 id="setup">How to setup</H2>

		<Steps>
			<Step title="Install packages">
				<p class="mb-4">
					Install the runtime packages first.
				</p>

				<PMCommand command="add" args={pageData.packages} />

				<p class="mt-5 mb-4">
					Add the shadcn-svelte primitives used by the chatbot UI.
				</p>

				<PMCommand
					command="execute"
					args={[
						"shadcn-svelte@latest",
						"add",
						...pageData.shadcnComponents
					]}
				/>
			</Step>

			{#if pageData.aiSetupFile}
				<Step title="AI setup">
					<p class="mb-4">
						Configure your model provider in
						<code>src/lib/config/ai.ts</code>.
					</p>

					<SingleFile code={pageData.aiSetupFile} />
				</Step>
			{/if}

			{#if pageData.chatRouteFile}
				<Step title="Add chat/+server.ts">
					<p class="mb-4">
						Create the API route that streams responses back to the UI.
					</p>

					<SingleFile code={pageData.chatRouteFile} />
				</Step>
			{/if}

			<Step title="Folder structure">
				<p class="mb-4">
					Keep the files arranged like this so the imports match the
					example setup.
				</p>

				<SingleFile code={folderStructureCode} />
			</Step>

			<Step title="Add other components">
				<p class="mb-4">
					Copy the chatbot component files into your primitives folder.
				</p>

				<MultipleSelectFiles
					code={pageData.frontendFiles}
					folderStructure={pageData.folderStructure}
				/>
			</Step>
		</Steps>
	</section>
</div>
