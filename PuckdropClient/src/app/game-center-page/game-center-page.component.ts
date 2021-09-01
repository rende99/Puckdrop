import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-game-center-page',
  templateUrl: './game-center-page.component.html',
  styleUrls: ['./game-center-page.component.scss']
})
export class GameCenterPageComponent implements OnInit {
  date: string = new Date("February 13, 2016").toISOString().split('T')[0];
  constructor() { }

  ngOnInit() {
    this.setCSSColorway();
  }

  // Reset color to generic settings
  setCSSColorway() {
    document.documentElement.style.setProperty('--primary-color', 'black');
    document.documentElement.style.setProperty('--secondary-color', 'black');
  }

}
