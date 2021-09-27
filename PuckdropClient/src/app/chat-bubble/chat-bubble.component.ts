import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {
  @Input() username: string;
  @Input() messageContent: string;
  @Input() timePosted: number;
  @Input() senderId: number;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  timeToString(rawTime: number) {
    var d = Math.floor((new Date().getTime() - rawTime)/1000);
    
    // d now represents seconds since message was sent
    if(d < 2){
      return `just now`;
    }else if(d < 60){
      return `${d} seconds ago`;
    }else if(d / 60 < 60) {
      return `${Math.floor(d/60)} minutes ago`;
    }else if(d / 60 / 60 < 24) {
      return `${Math.floor(d/60/60)} hours ago`;
    }else {
      return `${Math.floor(d/60/60/24)} days ago`;
    }
  }

  isMyMessage() {
    return parseInt(this.cookieService.get('id')) === this.senderId;
  }

}
