import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
       contact="Contact Us"

       contactForm = new FormGroup({
        //  name: new FormControl('',Validators.required)
         email: new FormControl('',Validators.required)
       })
       get email(){return this.contactForm.get('email')}
  constructor() { }

  ngOnInit(): void {
  }

}
