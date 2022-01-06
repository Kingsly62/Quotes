import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-us',
  templateUrl: './rate-us.component.html',
  styleUrls: ['./rate-us.component.css']
})
export class RateUsComponent implements OnInit {

     title='Comment To  Us Kindly in The Suggestion Box Below '

     public name=""
     public age=0
     public occupation=""
     
     count=0;
    
    users=[
      {
      name: 'John',
      age: 30,
      occupation: 'Python developer'
      },
      {
        name: 'Smith',
        age: 45,
        occupation: 'Angular developer'
        },
        {
          name: 'Sylvia',
          age: 45,
          occupation: 'Javascript Developer'
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
}