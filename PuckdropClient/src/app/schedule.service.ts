import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private _http: HttpClient) { }

  getTeamSchedule(teamId: number) {
    return this._http.get(`${global.APP_URL}/schedule/${teamId}`).pipe(retry(2));
  }
}
