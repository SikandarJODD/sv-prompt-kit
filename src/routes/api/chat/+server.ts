import { streamText, type UIMessage, convertToModelMessages } from "ai";
import { openrouter, defaultModel } from "$lib/config/ai";

export async function POST({ request }) {
	const { messages }: { messages: UIMessage[] } = await request.json();

	const result = streamText({
		model: openrouter(defaultModel),
		messages: await convertToModelMessages(messages)
	});

	return result.toUIMessageStreamResponse();
}
