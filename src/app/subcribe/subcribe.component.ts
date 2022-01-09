import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcribe',
  templateUrl: './subcribe.component.html',
  styleUrls: ['./subcribe.component.css']
})
export class SubcribeComponent implements OnInit {
  show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
subcribe(){
  this.show=!this.show
}
}
