import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent implements OnInit {
  title='Comment To  Us Kindly in The Suggestion Box Below '

  public name=""
  public age=0
  public occupation=""

  showViews:boolean=false;

  count=0;
 
 users=[
   {
   name: 'John',
   age: 30,
   occupation: 'Python developer'
   },
    
 ]
  constructor() { }

  ngOnInit(): void {
  }
  addUsers(){
    let newUser = {
      name: this.name,
      age: this.age,
      occupation: this.occupation
    }
   
    this.users.push(newUser)
  }
 counter(){
   this.count++
 }

 view(){
   this.showViews=!this.showViews
 }
}
