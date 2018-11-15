import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {contactForm} from '../contactForm';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {
  
  contactForm: FormGroup;
  i = 0;
  contact: [];

  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group(
      {
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: [''],
        nickname: [''],
        gender: ['']
      }
    )
    

}

onSubmit(){
  if(this.contactForm.valid){
    if(localStorage.getItem('form')){
      let temp = JSON.parse(localStorage.getItem('form'));
      temp.push(this.contactForm.value);
      localStorage.setItem('form',JSON.stringify(temp));
     } 
     else{
       let temp = [this.contactForm.value];   //[{name:"test"}]
       localStorage.setItem('form',JSON.stringify(temp));
     }
      this.contactForm.reset();

  }
 
}
}