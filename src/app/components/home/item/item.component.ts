import { Component, OnInit, Input } from '@angular/core';
import { ChatItem } from '../../../model/chat-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("dataProvider") dataProvider:ChatItem;

  constructor() { }

  ngOnInit() {
  }

}
