import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatItem, MessageType } from '../model/chat-item.model';
import { UUID } from 'angular2-uuid';
import { environment } from '../../environments/environment';
//import { ApiAiClient } from 'api-ai-javascript';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    messageAcknowledgeEvent = new EventEmitter<any>();
    loginEvent = new EventEmitter<any>();
    logoutEvent = new EventEmitter<any>();
    private baseURL: string = "https://api.dialogflow.com/v1/query/";
    isActiveSession:boolean = false;

    private token: string = environment.dialogflow.clientAccessKey;
    //private apiClient: ApiAiClient = new ApiAiClient({ accessToken: this.token });


    constructor(private http: HttpClient, private chatService: ChatService) { }

    public getResponse(query: string) {
        let data = {
            query: query,
            lang: this.chatService.selectedLanguage,
            sessionId: UUID.UUID()
        }
        return this.http
            .post(this.baseURL, data, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token
                })
            })
            .subscribe(res => {
                this.chatService.chats.push(new ChatItem(res['result'].speech, MessageType.SERVER));
                this.messageAcknowledgeEvent.emit();
            });


        // return this.apiClient.textRequest(query)
        //     .then(res => {
        //         const speech = res.result.fulfillment.speech;
        //         this.chatService.chats.push(new ChatItem(speech, MessageType.SERVER));
        //         this.messageAcknowledgeEvent.emit();
        //     });

    }
}