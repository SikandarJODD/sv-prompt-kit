import FileUpload from "./file-upload.svelte";
import FileUploadContent from "./file-upload-content.svelte";
import FileUploadTrigger from "./file-upload-trigger.svelte";
import { FileUploadContext } from "./context.svelte";

export {
    FileUpload,
    FileUploadContent,
    FileUploadTrigger,
    FileUploadContext,
    //
    FileUpload as Root,
    FileUploadContent as Content,
    FileUploadTrigger as Trigger,
};