import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as global from '../global'
import { resolve } from 'url';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private _http: HttpClient) { }

  getMessages() {
    return this._http.get(global.APP_URL + '/messages').pipe(retry(2));
  }

  sendMessage(str) {
    var jsonObject = JSON.stringify({
      username: "FAKE_USERNAME",
      messageContent: str,
      timePosted: Date.now()
    });
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/messages', jsonObject, {'headers': headers} ).pipe(retry(2));
  }

}
