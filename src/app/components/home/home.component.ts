import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatItem, MessageType } from '../../model/chat-item.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { SupportedLanguages } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @ViewChild("messageInput") messageInput: ElementRef;
  @ViewChild("messageContainer") messageContainer: ElementRef;
  userMessage: string;

  constructor(private chatService: ChatService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    if (!this.dataService.isActiveSession) {
      this.router.navigate([""]);
    } else {
      this.messageInput.nativeElement.focus();
      if(this.chatService.selectedLanguage === SupportedLanguages.ENGLISH) {
        this.dataService.getResponse("Hi");
      } else if (this.chatService.selectedLanguage === SupportedLanguages.PORTUGUESE) {
        this.dataService.getResponse("Oi");
      } else if (this.chatService.selectedLanguage === SupportedLanguages.GERMAN) {
        this.dataService.getResponse("Hallo");
      } else {
        this.dataService.getResponse("Hi");
      }      
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.sendMessage();
    }
  }

  sendMessage() {
    this.userMessage = this.messageInput.nativeElement.value;
    if (this.userMessage != null && this.userMessage != '') {
      this.chatService.chats.push(new ChatItem(this.userMessage, MessageType.USER));
      this.dataService.getResponse(this.userMessage);
    }
  }

  scrollToBottomWithFocus() {
    this.messageInput.nativeElement.value = "";
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    console.log(this.messageContainer.nativeElement.scrollHeight);
    
    this.messageInput.nativeElement.focus();
  }

  ngAfterViewChecked() {
    this.scrollToBottomWithFocus();
  }
}
