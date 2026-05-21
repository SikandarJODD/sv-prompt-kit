import { data as sourceData, fileGroups } from "$lib/components/primitives/full-chatbot/data";

const [aiSetupFile] = fileGroups.aiSetup;
const [chatRouteFile] = fileGroups.chat;

export const data = {
	id: sourceData.id,
	title: sourceData.title,
	description: sourceData.description,
	seo: sourceData.seo,
	packages: sourceData.install_block?.packages ?? [],
	shadcnComponents: sourceData.install_block?.shadcn_components ?? [],
	frontendFiles: fileGroups.frontend.map((file) => ({
		...file,
		name: file.name
	})),
	aiSetupFile: aiSetupFile
		? {
				...aiSetupFile,
				name: "src/lib/config/ai.ts"
			}
		: null,
	chatRouteFile: chatRouteFile
		? {
				...chatRouteFile,
				name: "src/routes/api/chat/+server.ts"
			}
		: null,
	folderStructure: sourceData.install_block?.folder_structure ?? ""
};
