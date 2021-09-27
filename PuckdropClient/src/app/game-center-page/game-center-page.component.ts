import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-center-page',
  templateUrl: './game-center-page.component.html',
  styleUrls: ['./game-center-page.component.scss']
})
export class GameCenterPageComponent implements OnInit {
  @Output() date: string = new Date().toISOString().split('T')[0];
  dateInfo = new FormGroup({
    year: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1960), Validators.max(new Date().getFullYear())]),
    month: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(12)]),
    day: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1), Validators.max(31)])
  });

  constructor() { }

  ngOnInit() {
    this.setCSSColorway();
  }

  submitDate() {
    let y = this.dateInfo.controls.year.value;
    let m = this.dateInfo.controls.month.value - 1;
    let d = this.dateInfo.controls.day.value;
    console.log(y,m,d);
    this.date = new Date(y, m, d).toISOString().split('T')[0];
  }

  // Reset color to generic settings
  setCSSColorway() {
    document.documentElement.style.setProperty('--primary-color', 'black');
    document.documentElement.style.setProperty('--secondary-color', 'black');
  }

}
