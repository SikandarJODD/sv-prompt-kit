# Image

The `Image` component renders images from base64 strings or `Uint8Array` binary data. It is useful for AI-generated images, binary tool responses, and upload previews where you do not already have a remote URL.

## Installation

<Tabs items={["CLI", "Manual"]}>
<Tab value="CLI">

### Using CLI

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/image.json
```

</Tab>
<Tab value="Manual">

### Manual Installation

Copy the files from `src/lib/components/ai/image` into your project.

</Tab>
</Tabs>

## Usage

```svelte
<script lang="ts">
	import { Image } from "$lib/components/ai/image";

	const base64 = "PHN2ZyB4bWxucz0i...";
</script>

<Image
	{base64}
	mediaType="image/svg+xml"
	alt="Generated icon"
	class="h-24 w-24 rounded-md"
/>
```

## Props

### `Image`

- `base64`: Base64-encoded image data used to build a data URL.
- `uint8Array`: Binary image data converted into an object URL.
- `mediaType`: Defaults to `"image/png"`. MIME type used with `base64` or `uint8Array`.
- `alt`: Required alternative text for the rendered image or placeholder.
- `class`: Additional CSS classes for the image or fallback placeholder.
- `...props`: Additional native image attributes forwarded to the `<img>` element.

## Features

- Accepts both base64 and `Uint8Array` sources, with base64 taking precedence when both are provided.
- Falls back to an accessible placeholder block when no valid image data is available.
- Forwards standard `<img>` attributes so sizing, loading, decoding, and referrer policies stay configurable.

## Examples

### Render a binary or generated image

```svelte
<script lang="ts">
	import { Image } from "$lib/components/ai/image";

	const base64 = "PHN2ZyB4bWxucz0i...";
</script>

<Image
	{base64}
	mediaType="image/svg+xml"
	alt="Compact SVG chat icon"
	class="h-24 w-24 rounded-md"
/>
```
