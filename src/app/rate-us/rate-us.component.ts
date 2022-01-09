import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent implements OnInit {

     title='Comment To  Us Kindly in The Suggestion Box Below '

     public name=""
     public age=0;
     public occupation=""
     public date=""

     showViews:boolean=false;

     
     count=0;
    
    users=[
      {
      name: '',
      age: 0,
      occupation: '',
      date:''
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

  removeUsers(){
    let newUserRemove = {
      name:this.name,
      age:this.age,
      occupation:this.occupation
    }
    this.users.splice(0)
  }
}