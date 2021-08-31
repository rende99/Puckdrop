import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-future-schedule',
  templateUrl: './future-schedule.component.html',
  styleUrls: ['./future-schedule.component.scss']
})
export class FutureScheduleComponent implements OnInit, OnChanges {
  @Input() id: number;
  schedule: any = {};
  upcomingSchedule: any = {};
  fullScheduleOpen: boolean = false;

  constructor(private scheduleService: ScheduleService) { }

  ngOnChanges() {
    //reload component when changes are made
    this.requestServiceJob();
  }

  ngOnInit() {
    this.requestServiceJob();
  }

  requestServiceJob() {
    this.scheduleService.getTeamSchedule(this.id).subscribe(res => {
      this.schedule = res;
      this.schedule = this.schedule.dates;
      console.log(this.schedule);
      this.upcomingSchedule = this.schedule.slice(0,3);
    });
  }

  toggleFullScheduleOpen() {
    this.fullScheduleOpen = !this.fullScheduleOpen;
  }

}
