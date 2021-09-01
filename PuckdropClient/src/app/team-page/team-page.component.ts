import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { SingleStatsService } from '../single-stats.service';
import { ActivatedRoute } from '@angular/router'; 
import  *  as  teamMediaImport  from  '../../assets/team-media.json';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {
  @Input() id;
  teamInfo: any = {};
  teamMedia: any = {};
  
  constructor(private singleStatsService: SingleStatsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.id = routeParams.id;
      this.requestTeamStandings();
    });
  }

  requestTeamStandings() {
    this.singleStatsService.getTeamStandings(this.id).subscribe(res => {
      this.teamInfo = res;
      this.teamInfo = this.teamInfo.teams[0]
      console.log(this.teamInfo)
      this.connectTeamMedia();
      this.setCSSColorway();
    });
  }

  // Choose proper JSON object for current team
  connectTeamMedia() {
    this.teamMedia = (teamMediaImport as any).default.find(x => {return x.id == this.teamInfo.id});
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

}
