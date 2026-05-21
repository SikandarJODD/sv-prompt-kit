<script lang="ts">
	import { FeedbackBar } from "$lib/components/ai/feedback-bar";

	function handleHelpful() {
		console.log("Marked as helpful");
	}

	function handleNotHelpful() {
		console.log("Marked as not helpful");
	}

	function handleClose() {
		console.log("Feedback bar closed");
	}
</script>

<FeedbackBar
	class="min-w-sm"
	title="Was this response helpful?"
	onHelpful={handleHelpful}
	onNotHelpful={handleNotHelpful}
	onClose={handleClose}
/>
