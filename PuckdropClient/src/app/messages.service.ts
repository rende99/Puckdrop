import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


}
