import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import * as global from '../../global'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})



export class ChatBoxComponent implements OnInit {
  messages;
  messageToSend: string;
  charactersLeft: number = global.MAX_MESSAGE_LENGTH;
  maxMessageLength: number = global.MAX_MESSAGE_LENGTH;
  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.getMessages().subscribe(res => {
      this.messages = res;
      console.log(res);
    });
  }

  messageChanged(e) {
    this.calculateCharactersLeft(e.target.value);
  }

  sendMessage() {
    if(this.messageToSend){
      this.messagesService.sendMessage(this.messageToSend, -1).subscribe(res => {
        console.log(res);
      })
    }
  }

  calculateCharactersLeft(msg) {
    this.charactersLeft = global.MAX_MESSAGE_LENGTH - msg.length
  }

}
