# Installation

Set up a new SvelteKit app first, then initialize `shadcn-svelte` so you can start adding Svelte Prompt Kit components into your project.

## Prerequisites

### 1. Install SvelteKit

Create a fresh SvelteKit project as the base for your setup:

```bash
pnpm dlx sv create my-app
```

### 2. Initialize shadcn-svelte

Run the initializer inside your SvelteKit app:

```bash
pnpm dlx shadcn-svelte@latest init
```

## Usage

Add a component directly from the registry. This example installs the Prompt Input component:

```bash
pnpm dlx shadcn-svelte@latest add https://sv-prompt-kit.vercel.app/r/prompt-input.json
```

Basic usage:

```svelte
<script lang="ts">
  import {
    PromptInput,
    PromptInputAction,
    PromptInputActions,
    PromptInputTextarea
  } from "$lib/components/ai/prompt-input";
  import { Button } from "$lib/components/ui/button/index.js";
  import ArrowUp from "@lucide/svelte/icons/arrow-up";
  import Square from "@lucide/svelte/icons/square";

  let input = $state("");
  let isLoading = $state(false);

  function handleSubmit() {
    isLoading = true;

    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }

  function handleValueChange(value: string) {
    input = value;
  }
</script>

<PromptInput
  value={input}
  onValueChange={handleValueChange}
  {isLoading}
  onSubmit={handleSubmit}
  class="w-full max-w-(--breakpoint-md)"
>
  <PromptInputTextarea placeholder="Ask me anything..." />
  <PromptInputActions class="justify-end pt-2">
    <PromptInputAction>
      {#snippet tooltip()}
        {isLoading ? "Stop generation" : "Send message"}
      {/snippet}
      <Button
        variant="default"
        size="icon"
        class="h-8 w-8 rounded-full"
        onclick={handleSubmit}
      >
        {#if isLoading}
          <Square class="size-5 fill-current" />
        {:else}
          <ArrowUp class="size-5" />
        {/if}
      </Button>
    </PromptInputAction>
  </PromptInputActions>
</PromptInput>
```

For full install steps, source files, and more examples, visit `/components/prompt-input`.
