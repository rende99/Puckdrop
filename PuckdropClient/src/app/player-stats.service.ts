import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {
  
  constructor(private _http: HttpClient) { }

  getPlayerStats(playerId: number) {
    return this._http.get(`${global.APP_URL}/people/${playerId}/stats`).pipe(retry(2));
  }


}
