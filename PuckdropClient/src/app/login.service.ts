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
    return this._http.post(global.APP_URL + '/signup', signupObject, {'headers': headers});
  }

  postLogin(loginObject) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/login', loginObject, {'headers': headers});
  }

  changePassword(passwordObject) {
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this._http.post(global.APP_URL + '/changepassword', passwordObject, {'headers': headers});
  }

  deleteAccount(deleteObject) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      }),
      body: deleteObject
    }
    return this._http.delete(global.APP_URL + '/deleteaccount', httpOptions);
  }

}
