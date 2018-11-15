import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
users: any;
searchableList: any;
  constructor() { 
    this.searchableList = ['name','phone'];
  }

  ngOnInit() {
    this.users  = JSON.parse(localStorage.getItem('form'));
    
  }
delete(){
  var form = JSON.parse(localStorage.getItem('form'));
  var index = form.map(function(element) {
    return element.name;
  }).indexOf(form.name);
  form.splice(index, 1);
  localStorage.setItem('form', JSON.stringify(form));
  this.users  = JSON.parse(localStorage.getItem('form'));
  
}
}
