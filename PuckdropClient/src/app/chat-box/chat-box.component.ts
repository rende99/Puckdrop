import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import * as global from '../../global'
import { CookieService } from 'ngx-cookie-service';

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
  @Input() chatId: number = -1;
  messageFinishedSending: boolean = false;

  constructor(
    private messagesService: MessagesService,
    private cdr: ChangeDetectorRef,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.messagesService.getMessages(this.chatId).subscribe(res => {
      this.messages = res;
    });
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  messageChanged(e) {
    this.calculateCharactersLeft(e.target.value);
  }

  sendMessage() {
    if(this.messageToSend){
      let userToUse = this.cookieService.get('username') ? this.cookieService.get('username') : "FAKE_USERNAME";

      let jsonMessage = {
        chatId: this.chatId,
        userId: parseInt(this.cookieService.get('id')),
        username: userToUse,
        messageContent: this.messageToSend,
        timePosted: Date.now()
      }

      this.messagesService.sendMessage(jsonMessage).subscribe(res => {
        var inputField: any = document.getElementById("messageInputId");
        inputField.value = '';

        // reload component to show updated message feed:
        this.ngOnInit()
      })
    }
  }

  calculateCharactersLeft(msg) {
    this.charactersLeft = global.MAX_MESSAGE_LENGTH - msg.length
  }

  isAllowedToChat(){
    return (+this.chatId == -1) || ( parseInt(this.cookieService.get('favoriteTeamId')) === +this.chatId )
  }

}
