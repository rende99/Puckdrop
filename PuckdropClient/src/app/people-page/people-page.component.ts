import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerInfoService } from '../player-info.service';
import { PlayerStatsService } from '../player-stats.service';
import  *  as  teamMediaImport  from  '../../assets/team-media.json';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {
  id = history.state.id;
  stats: any = {};
  info: any = {};
  playerImageUrl: string;
  teamMedia: any = {};

  constructor(
    private playerStatsService: PlayerStatsService,
    private playerInfoService: PlayerInfoService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.id = routeParams.id;
      this.playerImageUrl = `http://nhl.bamcontent.com/images/headshots/current/168x168/${this.id}.jpg`
      //this.requestTeamStandings();
      this.requestPlayerStats();
      this.requestPlayerInfo();
    });
  }

  requestPlayerStats() {
    this.playerStatsService.getPlayerStats(this.id).subscribe(res => {
      this.stats = res;
      this.stats = this.stats.stats[0].splits[0]
      console.log(this.stats);
    });
  }

  requestPlayerInfo() {
    this.playerInfoService.getPlayerInfo(this.id).subscribe(res => {
      this.info = res;
      this.info = this.info.people[0];
      console.log(this.info);
      this.connectTeamMedia();
      this.setCSSColorway();
    });
  }

  // Choose proper JSON object for current team
  connectTeamMedia() {
    this.teamMedia = (teamMediaImport as any).default.find(x => {return x.id == this.info.currentTeam.id});
  }

  getTeamLogo() {
    return `../../assets/img/nhl-img/${this.teamMedia['img-url']}`
  }

  // Since SCSS is a CSS preprocessor, we can't change SCSS variables at runtime.
  // Changing our colorway through CSS allows us to dynamically change theme coloring at runtime.
  setCSSColorway() {
    document.documentElement.style.setProperty('--primary-color', this.teamMedia['primary-color']);
    document.documentElement.style.setProperty('--secondary-color', this.teamMedia['secondary-color']);
  }

  getAgeFromDate(d: string){
    let birthDate = new Date(d);
    let timeDelta = Math.abs(Date.now() - birthDate.getTime());
    return Math.floor( (timeDelta / (1000 * 3600 * 24)) / 365.25);
  }

}
