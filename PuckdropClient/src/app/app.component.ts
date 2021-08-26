import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PuckdropClient With Spring';
  myresponse: any;

  constructor(private _http: HttpClient) { }
 
  // Method to fetch all employees from the database table.
  getAllUsers() {
    console.log("fetching.......")
    this._http.get(global.APP_URL + '/users').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }
}
