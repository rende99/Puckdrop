import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingleStatsService {
  
  constructor(private _http: HttpClient) { }

  getTeamStandings(teamId: number) {
    return this._http.get(`${global.APP_URL}/teamstats/${teamId}`).pipe(retry(2));
  }


}
