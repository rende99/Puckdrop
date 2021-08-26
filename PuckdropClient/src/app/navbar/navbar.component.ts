import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../global'
import { TeamNamesService } from '../team-names.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  teams: any = {};

  constructor(private _http: HttpClient, private teamNamesService: TeamNamesService) { }

  ngOnInit() {
    this.fetchTeams();
  }

  fetchTeams() {
    console.log("fetching.......")
    this.teamNamesService.getTeamNames().subscribe(res => {
      this.teams = res;
    });
  }


}
