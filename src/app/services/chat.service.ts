import { ChatItem, MessageType } from "../model/chat-item.model";

export class ChatService {
    languages: { key: String, value: String }[] = [{ key: "English", value: "en" },
    { key: "Portuguese", value: "pt-br" }, { key: "German", value: "de" }];
    selectedLanguage: String = 'en';
    chats: ChatItem[] = [];
}