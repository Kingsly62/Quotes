import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
     about='About Us'

     showContent:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
moreContent(){
  this.showContent=!this.showContent
}
}
