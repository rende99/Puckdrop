import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RosterService } from '../roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit, OnChanges {
  @Input() id: number;
  roster: any = {
    forwards: {
      lw: [],
      c: [],
      rw: []
    },
    defenders: [],
    goalies: []
  };

  constructor(private rosterService: RosterService) { }

  ngOnChanges() {
    this.makeRosterRequest();
  }

  ngOnInit() {
    this.makeRosterRequest();
  }

  makeRosterRequest() {
    this.rosterService.getRoster(this.id).subscribe(res => {
      var response: any = res;
      this.roster.forwards.lw = response.roster.filter(p => p.position.type == "Forward" && p.position.code == "L");
      this.roster.forwards.c = response.roster.filter(p => p.position.type == "Forward" && p.position.code == "C");
      this.roster.forwards.rw = response.roster.filter(p => p.position.type == "Forward" && p.position.code == "R");
      this.roster.defenders = response.roster.filter(p => p.position.code == "D");
      this.roster.goalies = response.roster.filter(p => p.position.code == "G");
    });
  }

}
