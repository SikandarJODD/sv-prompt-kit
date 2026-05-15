<script lang="ts">
	import * as ChainOfThought from "$lib/components/ai/chain-of-thought";
</script>

<div class="w-full max-w-3xl">
	<ChainOfThought.Root>
		<ChainOfThought.Step>
			<ChainOfThought.Trigger>
				Analyzing the user's request
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					The user asked about implementing a sorting algorithm
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					This appears to be a technical question requiring code
					examples
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step>
		<ChainOfThought.Step>
			<ChainOfThought.Trigger>
				Considering implementation options
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					Quick sort: O(n log n) average case, good for general
					purpose
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Merge sort: O(n log n) worst case, stable and predictable
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Bubble sort: O(n²), simple but inefficient for large
					datasets
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step>
		<ChainOfThought.Step isLast>
			<ChainOfThought.Trigger>
				Selecting the best approach
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					Given the educational context, I'll demonstrate merge sort
					for its clarity
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					It shows the divide-and-conquer principle effectively
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step>
	</ChainOfThought.Root>
</div>
