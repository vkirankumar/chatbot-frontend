import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogout = false;

  constructor(private chatService:ChatService, private dataService:DataService,
    private router:Router) { }

  ngOnInit() {    
    this.dataService.loginEvent.subscribe(() => {
      this.isLogout = true;
    });
  }

  onLogoutClick() {
    this.chatService.chats = [];
    this.router.navigate(["/"]);
    this.isLogout = false;
  }

}
