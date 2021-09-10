import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../../global'
import { TeamNamesService } from '../team-names.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  teams: any = {};

  constructor(private teamNamesService: TeamNamesService, private cookieService: CookieService) { }

  ngOnInit() {
    this.fetchTeams();
  }

  fetchTeams() {
    this.teamNamesService.getTeamNames().subscribe(res => {
      this.teams = res;
    });
  }

  getMyTeamLink() {
    var cookieFavTeamId: string = this.cookieService.get('favoriteTeamId');
    if(cookieFavTeamId != '-1'){
      return `/teams/${cookieFavTeamId}`
    }else{
      return '';
    }
  }

  logout() {
    this.cookieService.deleteAll();
  }


}
