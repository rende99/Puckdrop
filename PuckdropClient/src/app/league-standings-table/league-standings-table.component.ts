import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../standings.service';


enum Division {
    League = -1,
    West = 0,
    Central = 1,
    East = 2,
    North = 3
}

@Component({
  selector: 'app-league-standings-table',
  templateUrl: './league-standings-table.component.html',
  styleUrls: ['./league-standings-table.component.scss']
})
export class LeagueStandingsTableComponent implements OnInit {
  rawStandings: any = {}
  newStandings: any = {}
  focusedDivision: Division = Division.League
  tableOpen: boolean = false;
  constructor(private standingsService: StandingsService) { }

  ngOnInit() {
    this.standingsService.getLeagueStandings().subscribe(res => {
      this.rawStandings = res;
      this.cleanStandings();
    });
  }

  setFocus(event) {
    switch(event.target.getAttribute("for")) {
      case "League":
        this.focusedDivision = Division.League;
        this.tableOpen = false;
        break;
      case "Honda West":
        this.focusedDivision = Division.West;
        break;
      case "Discover Central":
        this.focusedDivision = Division.Central;
        break;
      case "MassMutual East":
        this.focusedDivision = Division.East;
        break;
      case "Scotia North":
        this.focusedDivision = Division.North;
        break;
      default:
        break;
    }
    this.cleanStandings();
  }

  // This function will take in the focused division, and modify rawStandings to create the standings object we want to display.
  cleanStandings() {
    if(this.focusedDivision === Division.League){
      var records = this.rawStandings.records;
      var newArr = [];
      records.forEach(function (rec) {
        newArr = newArr.concat(rec.teamRecords)
      }); 
      this.newStandings = newArr.sort((a, b) => (a.points > b.points) ? -1 : 1);
    } else {
      this.newStandings = this.rawStandings.records[this.focusedDivision].teamRecords.sort((a, b) => (a.points > b.points) ? -1 : 1)
    }
    console.log(this.newStandings);
  }

  toggleTableOpen() {
    this.tableOpen = !this.tableOpen;
  }

}
