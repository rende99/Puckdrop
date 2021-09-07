import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import * as global from '../global'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  postSignup(signupObject) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/signup', signupObject, {'headers': headers}).pipe(retry(2));
  }

  postLogin(loginObject) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.get(global.APP_URL + '/login', loginObject).pipe(retry(2));
  }

}
