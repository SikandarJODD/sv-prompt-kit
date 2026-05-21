<script lang="ts">
	import * as ChainOfThought from "$lib/components/ai/chain-of-thought";
	import Lightbulb from "@lucide/svelte/icons/lightbulb";
	import Search from "@lucide/svelte/icons/search";
	import Target from "@lucide/svelte/icons/target";
</script>

<div class="w-full max-w-3xl">
	<ChainOfThought.Root>
		<ChainOfThought.Step>
			<ChainOfThought.Trigger>
				{#snippet leftIcon()}
					<Search class="size-4" />
				{/snippet}
				Research phase: Understanding the problem space
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					The problem involves optimizing database queries for a
					high-traffic e-commerce platform
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Current bottlenecks: slow product search (2-3 seconds),
					category filtering delays
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Database: PostgreSQL with 10M+ products, complex joins
					across multiple tables
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step>

		<ChainOfThought.Step>
			<ChainOfThought.Trigger>
				{#snippet leftIcon()}
					<Lightbulb class="size-4" />
				{/snippet}
				Analysis: Identifying optimization opportunities
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					Missing indexes on frequently queried columns (product_name,
					category_id, price_range)
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					N+1 query problem in product listing API - need eager
					loading
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Full table scans occurring due to non-optimized WHERE
					clauses
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					Consider implementing database partitioning for better
					performance
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step>
		<!-- <ChainOfThought.Step>
			<ChainOfThought.Trigger>
				{#snippet leftIcon()}
					<Target class="size-4" />
				{/snippet}
				Solution: Implementing targeted improvements
			</ChainOfThought.Trigger>
			<ChainOfThought.Content>
				<ChainOfThought.Item>
					<strong>Step 1:</strong> Add composite indexes for common query patterns
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					<strong>Step 2:</strong> Optimize ORM queries with eager loading
				</ChainOfThought.Item>
				<ChainOfThought.Item>
					<strong>Step 3:</strong> Implement query result caching for popular searches
				</ChainOfThought.Item>
			</ChainOfThought.Content>
		</ChainOfThought.Step> -->
	</ChainOfThought.Root>
</div>
