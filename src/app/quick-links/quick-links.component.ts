import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {
   head="Quick Links"
   public color="color"
  constructor() { }

  ngOnInit(): void {
  }

}