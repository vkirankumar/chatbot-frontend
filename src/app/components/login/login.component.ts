import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  languages: { key: String, value: String }[] = [];
  @ViewChild("name") nameField: ElementRef;
  selectedLanguage:String = "en";

  constructor(private formBuilder: FormBuilder, private router: Router,
    private dataService: DataService, private chatService: ChatService) {
    this.createForm();
    this.languages = chatService.languages;
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['']
    });
  }

  ngOnInit() {
    this.nameField.nativeElement.focus();
  }

  onClick() {
    this.dataService.isActiveSession = true;
    this.router.navigate(["home"]);
    //this.chatService.chats.push(new ChatItem("Hi " + this.nameField.nativeElement.value, MessageType.SERVER));
    this.dataService.loginEvent.emit();
    this.chatService.selectedLanguage = this.selectedLanguage;
  }

  onLanguageChange(value: String) {
    this.selectedLanguage = value;
  }

}
