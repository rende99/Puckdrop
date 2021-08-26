import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount, retry, shareReplay } from 'rxjs/operators'
import * as global from '../global'

@Injectable({
  providedIn: 'root'
})
export class TeamNamesService {
  teams: any = {};

  constructor(private _http: HttpClient) { }

  getTeamNames() {
    return this._http.get(global.APP_URL + '/teams').pipe(retry(2));
  }


}
