import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatItem, MessageType } from '../model/chat-item.model';
import { UUID } from 'angular2-uuid';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    messageAcknowledgeEvent = new EventEmitter<any>();
    loginEvent = new EventEmitter<any>();
    logoutEvent = new EventEmitter<any>();
    private baseURL: string = "https://api.dialogflow.com/v1/query/";
    isActiveSession: boolean = false;
    sessionId: String = UUID.UUID();

    private token: string = environment.dialogflow.clientAccessKey;

    constructor(private http: HttpClient, private chatService: ChatService) { }

    public getResponse(query: string) {
        let data = {
            query: query,
            lang: this.chatService.selectedLanguage,
            sessionId: this.sessionId
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

    }
}