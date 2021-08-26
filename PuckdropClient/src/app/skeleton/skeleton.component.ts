import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  constructor() { }

  ngOnInit() {
    this.setCSS();
    console.log(this.width, this.height);
  }

  setCSS() {
    document.documentElement.style.setProperty('--w', `${this.width.toString()}`);
    document.documentElement.style.setProperty('--h', `${this.height.toString()}`);
  }


}
