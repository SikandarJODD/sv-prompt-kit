<script lang="ts">
	import { page } from "$app/state";
	import CopyPageDropdown from "$lib/components/docs/base/main/copy-page-dropdown.svelte";
	import Seo from "$lib/components/docs/base/main/seo.svelte";
	import { PreviewComponent } from "$lib/components/ui/preview-component";
	import { H1, H2, Paragraph, Steps, Step, Divider, Link } from "$markdown";
	import { PMCommand } from "$lib/components/ui/pm-command";
	import PromptInputPreview from "../../components/prompt-input/examples/preview.svelte";
	import PromptInputPreviewRaw from "../../components/prompt-input/examples/preview.svelte?raw";

	let getURLPath = (url: string) => {
		return url.split("?")[0].split("#")[0];
	};

	let llmsTxtUrl = $derived(`${getURLPath(page.url.href)}/llms.txt`);

	const promptInputPreviewCode = {
		name: "preview.svelte",
		code: PromptInputPreviewRaw,
		lang: "svelte" as const,
		hideLines: true
	};
</script>

<Seo
	title="Installation"
	description="Set up Svelte Prompt Kit in a SvelteKit project, initialize shadcn-svelte, and add your first AI component."
	keywords={[
		"svelte prompt kit",
		"installation",
		"prompt input",
		"shadcn-svelte",
		"docs"
	]}
/>

<div class="space-y-8">
	<section class="space-y-3">
		<div
			class="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-4"
		>
			<H1 id="installation">Installation</H1>
			<CopyPageDropdown componentName="Installation" {llmsTxtUrl} />
		</div>
		<div class="mt-3 max-w-2xl">
			<Paragraph>
				Set up a new SvelteKit app first, then initialize shadcn-svelte
				so you can start adding Svelte Prompt Kit components into your
				project.
			</Paragraph>
		</div>
	</section>

	<section>
		<Steps>
			<Step title="Install SvelteKit">
				<p class="mb-4">
					Create a fresh SvelteKit project as the base for your setup.
					Once the app is ready, you can continue with Tailwind CSS
					and component tooling.
				</p>
				<PMCommand
					command="execute"
					args={["sv", "create", "my-app"]}
				/>
			</Step>

			<Step title="Initialize shadcn-svelte">
				<p class="mb-4">
					Run the shadcn-svelte initializer inside your SvelteKit app
					to set up the required project configuration.
				</p>
				<PMCommand
					command="execute"
					args={["shadcn-svelte@latest", "init"]}
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<Divider />
		<H2 id="usage">Usage</H2>
		<Paragraph>
			Once your project is ready, add a component directly from the
			registry. The example below installs the <code>Prompt Input</code> component
			and shows the same preview used on its component page.
		</Paragraph>
		<PMCommand
			command="execute"
			args={[
				"shadcn-svelte@latest",
				"add",
				"https://sv-prompt-kit.vercel.app/r/prompt-input.json"
			]}
		/>
		<PreviewComponent
			code={promptInputPreviewCode}
			class="mt-4"
			showRetry={false}
		>
			<PromptInputPreview />
		</PreviewComponent>
		<Paragraph>
			Need the full install steps, source files, and additional examples?
			Visit the <Link href="/components/prompt-input"
				>Prompt Input component page</Link
			>.
		</Paragraph>
	</section>
</div>
