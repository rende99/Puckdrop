import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';
import  *  as  teamMediaImport  from  '../../assets/team-media.json';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @Input() id;
  gameInfo: any = {};
  constructor(private gameService: GameService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setCSSColorway();
    this.activeRoute.params.subscribe(routeParams => {
      this.id = routeParams.id;
      this.requestGameInfo();
    });

  }

  requestGameInfo() {
    this.gameService.getGameInfo(this.id).subscribe(res => {
      console.log(res);
      this.gameInfo = res;
    });
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

  setCSSColorway() {
    document.documentElement.style.setProperty('--primary-color', 'black');
    document.documentElement.style.setProperty('--secondary-color', 'black');
  }

}
