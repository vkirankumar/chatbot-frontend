export class ChatItem {
    constructor(public message:String, public type:MessageType) {}

    getProfileImage() {
        if(this.type == MessageType.SERVER) {
            return "https://vagupu.com/assets/img/bot.gif";
        } else {
            return "https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png";
        }
    }
}
export enum MessageType {
    USER = 'right',
    SERVER = 'left'    
}