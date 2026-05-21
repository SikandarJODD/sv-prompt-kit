<script lang="ts">
	import * as Message from "$lib/components/ai/message";
</script>

<div class="flex flex-col gap-8">
	<Message.Root class="justify-end">
		<Message.Content>Hello! How can I help you today?</Message.Content>
	</Message.Root>

	<Message.Root class="justify-start">
		<Message.Content
			markdown
			class="bg-transparent p-0"
			content="I can help with a variety of tasks: answering questions, providing
			information, assisting with coding, generating creative content.
			What would you like help with today?"
		></Message.Content>
	</Message.Root>
</div>
