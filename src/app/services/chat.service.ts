import { ChatItem } from "../model/chat-item.model";
import { SupportedLanguages } from "../../environments/environment";

export class ChatService {
    languages: { key: String, value: String }[] = [{ key: "English", value: SupportedLanguages.ENGLISH },
    { key: "Portuguese", value: SupportedLanguages.PORTUGUESE }, { key: "German", value: SupportedLanguages.GERMAN }];
    selectedLanguage: String = SupportedLanguages.ENGLISH;
    chats: ChatItem[] = [];
}