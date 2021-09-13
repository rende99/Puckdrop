import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import * as global from '../global'

type signupCred = {
  username: string,
  password: string,
  favoriteTeamId: number
}

type loginCred = {
  username: string,
  password: string
}

type changePassCred = {
  id: number,
  oldPassword: string,
  newPassword: string
}

type deleteCred = {
  id: number,
  password: string
}

type newTeamCred = {
  id: number,
  favoriteTeamId: number
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  headers = new HttpHeaders({
    'Content-Type':'application/json',
  })
  constructor(private _http: HttpClient) { }

  postSignup(signupObject: signupCred) {

    return this._http.post(global.APP_URL + '/signup', JSON.stringify(signupObject), {'headers': this.headers});
  }

  postLogin(loginObject: loginCred) {
    return this._http.post(global.APP_URL + '/login', JSON.stringify(loginObject), {'headers': this.headers});
  }

  changePassword(passwordObject: changePassCred) {
    return this._http.post(global.APP_URL + '/changepassword', JSON.stringify(passwordObject), {'headers': this.headers});
  }

  deleteAccount(deleteObject: deleteCred) {
    const httpOptions = {
      headers: this.headers,
      body: JSON.stringify(deleteObject)
    }
    return this._http.delete(global.APP_URL + '/deleteaccount', httpOptions);
  }

  changeFavoriteTeam(newTeamObject: newTeamCred) {
    return this._http.put(global.APP_URL + '/updatefavoriteteam', JSON.stringify(newTeamObject), {'headers': this.headers});
  }

}
