import { OPENROUTER_API_KEY } from "$env/static/private";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const openrouter = createOpenRouter({
	apiKey: OPENROUTER_API_KEY,
	appName: "Svelte Prompt Kit",
	appUrl: "https://sv-prompt-kit.vercel.app"
});

// You can change the model: https://openrouter.ai/models
let defaultModel = "poolside/laguna-xs.2:free";

export { openrouter, defaultModel };
