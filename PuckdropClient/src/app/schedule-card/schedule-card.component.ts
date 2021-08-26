import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  *  as  teamMediaImport  from  '../../assets/team-media.json';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.scss']
})
export class ScheduleCardComponent implements OnInit {
  @Input() data: any;
  @Input() id: number;
  teamLocationWord: string;  // Either "at" or "vs" for away and home, respectively.
  gameTime: string; // Formatted hh:mm string for readable game time.


  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(_ => {
      this.teamLocationWord = this.isHomeGame() ? "vs" : "at";
      this.gameTime = this.formatGameTime();
    });
  }

  isHomeGame() {
    return this.data.games[0].teams.home.team.id == this.id;
  }

  formatGameTime() {
    var gameDate = new Date(this.data.games[0].gameDate);
    var h = gameDate.getHours();
    var ampm = h >= 12 ? "pm" : "am";
    h = h % 12;
    var m = gameDate.getMinutes().toString();
    m = ('0' + m).slice(-2);
    return `${h}:${m}${ampm}`
  }

  getOppLogo(oppId: number) {
    var oppMedia = (teamMediaImport as any).default.find(x => {return x.id == oppId});
    return `../../assets/img/nhl-img/${oppMedia['img-url']}`;
  }

  getOppId() {
    return this.teamLocationWord === "at" ? this.data.games[0].teams.home.team.id : this.data.games[0].teams.away.team.id;
  }

}
