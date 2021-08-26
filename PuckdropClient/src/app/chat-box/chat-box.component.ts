import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {
  messages;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.getMessages().subscribe(res => {
      this.messages = res;
      console.log(res);
    });
  }

}
