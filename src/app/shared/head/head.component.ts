import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  public closemenu:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openmenu() {
    this.closemenu = !this.closemenu;
    console.log(this.closemenu);
  }
}
