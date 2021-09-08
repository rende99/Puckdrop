import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as global from '../global'
import { resolve } from 'url';
import { retry } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _http: HttpClient, private cookieService: CookieService) { }

  getMessages(chatId) {
    return this._http.get(global.APP_URL + `/messages/${chatId}`).pipe(retry(2));
  }

  sendMessage(str, chatId) {
    var userToUse = this.cookieService.get('username') ? this.cookieService.get('username') : "FAKE_USERNAME";
    var jsonObject = JSON.stringify({
      chatId: chatId,
      userId: parseInt(this.cookieService.get('id')),
      username: userToUse,
      messageContent: str,
      timePosted: Date.now()
    });
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/messages', jsonObject, {'headers': headers} ).pipe(retry(2));
  }

}
