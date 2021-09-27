import { Component, Input, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-league-games',
  templateUrl: './league-games.component.html',
  styleUrls: ['./league-games.component.scss']
})
export class LeagueGamesComponent implements OnInit {

  @Input() today: string;
  games: any = {};
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getGamesToday();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  getGamesToday(){
    this.scheduleService.getScheduleBetweenDates(this.today, this.today).subscribe(res => {
      this.games = res;
      if(this.games.dates.length){
        this.games = this.games.dates[0].games;
      }
    });
  }

  getHomeId(gameId: number){
    var filtered = this.games.filter(g => {return g.gamePk === gameId})
    return filtered[0].teams.home.team.id
  }

  getAwayId(gameId: number){
    var filtered = this.games.filter(g => {return g.gamePk === gameId})
    return filtered[0].teams.away.team.id
  }

}
