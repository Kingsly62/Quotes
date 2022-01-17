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
  public date=""

  showViews:boolean=true;

  count=0;
 
 users=[
   {
   name: '',
   age: 0,
   occupation: '',
   date: ''
   },
    
 ]
  constructor() { }

  ngOnInit(): void {
  }
  addUsers(){
    let newUser = {
      name: this.name,
      age: this.age,
      occupation: this.occupation,
      date: this.date
    }
   
    this.users.push(newUser)
  }
 counter(type:string){
   
   type==='add'?this.count++:this.count--
 }

 view(){
   this.showViews=!this.showViews
 }
}
