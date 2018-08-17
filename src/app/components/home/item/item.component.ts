import { Component, OnInit, Input } from '@angular/core';
import { ChatItem } from '../../../model/chat-item.model';
import { bypassSanitizationTrustHtml } from '@angular/core/src/sanitization/sanitization';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private sanitizer:DomSanitizer) {}

  @Input("dataProvider") dataProvider:ChatItem;

  ngOnInit() {
  }

  getSafeInnerHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.dataProvider.message);
  }
}
