import { Component, Input } from '@angular/core';
import { Contacts, contacts } from '../../models/Contact';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  contact!: Contacts;
  contacts = contacts;

  newName = '';
  newEmail = '';
  newNumber = '';
  selectedContact!: Contacts;


  ngOnChanges() {
    if (this.contact) {
      this.newName = this.contact.name;
      this.newEmail = this.contact.email;
      this.newNumber = this.contact.number;
    }
  }



  addContact() {
    if(this.newName !='' && this.newEmail !='' && this.newNumber){
     this.contacts.push({name: this.newName, email: this.newEmail, number: this.newNumber});
     this.newName = '';
     this.newEmail  = '';
     this. newNumber = '';
     
    }
    else{
     alert("cant add missing field")
    }
 }




}
