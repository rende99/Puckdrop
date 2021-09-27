import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as global from '../global'
import { resolve } from 'url';
import { retry } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

type messageObject = {
  chatId: number,
  userId: number,
  username: string,
  messageContent: string,
  timePosted: number
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _http: HttpClient, private cookieService: CookieService) { }

  getMessages(chatId) {
    return this._http.get(global.APP_URL + `/messages/${chatId}`).pipe(retry(2));
  }

  sendMessage(jsonMessageObject: messageObject) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/messages', JSON.stringify(jsonMessageObject), {'headers': headers} ).pipe(retry(2));
  }

}
