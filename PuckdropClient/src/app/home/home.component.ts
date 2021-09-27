import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
