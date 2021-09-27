import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RosterService {
  constructor(private _http: HttpClient) { }

  getRoster(teamId: number) {
    return this._http.get(`${global.APP_URL}/teams/${teamId}/roster`).pipe(retry(2));
  }

}
