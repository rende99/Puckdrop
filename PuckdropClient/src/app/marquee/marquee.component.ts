import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import  *  as  teamMediaImport  from  '../../assets/team-media.json';

type marqueeObject = {
  h_id: number,
  a_id: number,
  state: string,
  h_score: number,
  a_score: number,
  game_id: number
}

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements OnInit {
  //today: string = new Date().toISOString().split('T')[0];
  today: string = "2019-11-30";
  time: number;
  marqueeContent= [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    console.log(this.today);
    this.getGamesToday();
  }

  getGamesToday(){
    this.scheduleService.getScheduleBetweenDates(this.today, this.today).subscribe(res => {
      let response: any = res;
      console.log(res);
      for(var game of response.dates[0].games){
        let mObject: marqueeObject = {
          h_id: game.teams.home.team.id,
          a_id: game.teams.away.team.id,
          state: game.status.abstractGameState,
          h_score: game.teams.home.score,
          a_score: game.teams.away.score,
          game_id: game.gamePk
        }
        this.marqueeContent.push(mObject);
      }
      console.log(this.marqueeContent);
      this.setMarqueeTime();
    });
  }

  setMarqueeTime() {
    this.time = this.marqueeContent.length * 4;
    this.updateCSSVars(this.time);
  }

  updateCSSVars(time: number) {
    document.documentElement.style.setProperty('--marquee-time-raw', `${time}`);
    document.documentElement.style.setProperty('--marquee-time-formatted', `${time}s`);

  }

  getLogoFromId(id: number) {
    var media = (teamMediaImport as any).default.find(x => {return x.id == id});
    return `../../assets/img/nhl-img/${media['img-url']}`;
  }

}
