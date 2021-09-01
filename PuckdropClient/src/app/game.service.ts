import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as global from '../global'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient) { }

  getGameInfo(game_id: number){
    return this._http.get(`${global.APP_URL}/games/${game_id}`).pipe(retry(2));
  }

}
