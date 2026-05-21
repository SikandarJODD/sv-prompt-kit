<script lang="ts">
	import * as Message from "$lib/components/ai/message";
	import AlertTriangle from "@lucide/svelte/icons/triangle-alert";

	let { error }: { error: Error } = $props();
</script>

<Message.Root
	class="not-prose mx-auto flex w-full max-w-3xl flex-col items-start gap-2 px-0 md:px-10"
>
	<div class="group flex w-full flex-col items-start gap-0">
		<div
			class="flex min-w-0 flex-1 flex-row items-center gap-2 rounded-lg border-2 border-red-300 bg-red-300/20 px-2 py-1 text-primary"
		>
			<AlertTriangle size={16} class="text-red-500" />
			<p class="text-red-500">{error.message}</p>
		</div>
	</div>
</Message.Root>
