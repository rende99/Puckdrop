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
  @Input() a_id: number;
  @Input() isSingleCard: boolean = true;
  teamLocationWord: string;  // Either "at" or "vs" for away and home, respectively.


  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  isHomeGame() {
    return this.data.games[0].teams.home.team.id == this.id;
  }

  formatGameTime(d: Date) {
    var gameDate = new Date(d);
    var h = gameDate.getHours();
    var ampm = h >= 12 ? "pm" : "am";
    h = h % 12;
    var m = gameDate.getMinutes().toString();
    m = ('0' + m).slice(-2);
    return `${h}:${m}${ampm}`
  }

  getLogoFromId(id: number) {
    var media = (teamMediaImport as any).default.find(x => {return x.id == id});
    return `../../assets/img/nhl-img/${media['img-url']}`;
  }

  getOppId() {
    return this.isHomeGame() ? this.data.games[0].teams.away.team.id : this.data.games[0].teams.home.team.id;
  }

}
