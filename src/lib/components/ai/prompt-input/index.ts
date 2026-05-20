import PromptInput from "./prompt-input.svelte";
import PromptInputActions from "./prompt-input-actions.svelte";
import PromptInputAction from "./prompt-input-action.svelte";
import PromptInputTextarea from "./prompt-input-textarea.svelte";
import { getPromptInputContext, setPromptInputContext } from "./context.svelte";
import { type PromptInputSchema } from "./context.svelte";

export {
    PromptInput,
    PromptInputActions,
    PromptInputAction,
    PromptInputTextarea,
    type PromptInputSchema,
    getPromptInputContext,
    setPromptInputContext,
    //
    PromptInput as Root,
    PromptInputActions as Actions,
    PromptInputAction as Action,
    PromptInputTextarea as Textarea
}