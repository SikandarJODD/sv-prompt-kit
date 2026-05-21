<script lang="ts">
	import { TextShimmer } from "$lib/components/ai/text-shimmer/index.js";
</script>

<div class="flex flex-col gap-4">
	<TextShimmer>Processing your request...</TextShimmer>

	<TextShimmer as="p" class="text-lg"
		>Analyzing data with custom styling</TextShimmer
	>
</div>
