# File Upload

A drag-and-drop file upload primitive for AI inputs. It is designed to wrap a prompt composer, collect files from the picker or the drop zone, and expose an overlay while files are being dragged over the window.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/file-upload.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/file-upload` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import * as FileUpload from "$lib/components/ai/file-upload";

	function handleFilesAdded(files: File[]) {
		console.log(files);
	}
</script>

<FileUpload.Root onFilesAdded={handleFilesAdded} accept=".png,.jpg,.pdf">
	<FileUpload.Trigger>
		<button type="button">Attach files</button>
	</FileUpload.Trigger>

	<FileUpload.Content>
		<div class="rounded-xl border bg-background/90 p-6 text-center">
			Drop files to upload
		</div>
	</FileUpload.Content>
</FileUpload.Root>
```

## Props

### `FileUpload.Root`

- `onFilesAdded`: Called after the user selects or drops files.
- `children`: Upload trigger, content overlay, and surrounding UI.
- `multiple`: Defaults to `true`. Allows selecting more than one file.
- `accept`: Accepted file types, for example `".png,.pdf"`.
- `disabled`: Defaults to `false`. Disables drag-and-drop handling and file input activation.

### `FileUpload.Trigger`

- `asChild`: Defaults to `false`. Applies the trigger behavior to your custom wrapper instead of rendering a native button.
- `children`: Trigger label, icon, or custom button content.
- `class`: Additional CSS classes for the trigger wrapper or button.
- `onclick`: Optional click handler called after the file input is opened.
- `...props`: Additional native attributes forwarded to the rendered trigger element.

### `FileUpload.Content`

- `children`: Overlay content shown while files are being dragged over the window.
- `class`: Additional CSS classes for the drag overlay.
- `...props`: Additional native `div` attributes.

## Features

- Supports both drag-and-drop and file picker workflows through the same root component.
- Lets you render the trigger `asChild`, which makes it easy to attach upload behavior to icon buttons or custom controls.
- Separates the drop overlay from the trigger so you can compose uploads into larger prompt or chat UIs.

## Examples

### Prompt composer with attachments

```svelte
<script lang="ts">
	import * as FileUpload from "$lib/components/ai/file-upload";
	import * as PromptInput from "$lib/components/ai/prompt-input";

	let files = $state<File[]>([]);

	function handleFilesAdded(newFiles: File[]) {
		files = [...files, ...newFiles];
	}
</script>

<FileUpload.Root onFilesAdded={handleFilesAdded} accept=".jpg,.png,.pdf">
	<PromptInput.Root value="" onValueChange={() => {}} onSubmit={() => {}}>
		<PromptInput.Textarea placeholder="Type a message or drop files..." />
		<PromptInput.Actions>
			<PromptInput.Action>
				{#snippet tooltip()}Attach files{/snippet}
				<FileUpload.Trigger asChild>
					<button type="button">+</button>
				</FileUpload.Trigger>
			</PromptInput.Action>
		</PromptInput.Actions>
	</PromptInput.Root>

	<FileUpload.Content>
		<div class="rounded-xl border bg-background/90 p-6 text-center">
			Release to add files
		</div>
	</FileUpload.Content>
</FileUpload.Root>
```
