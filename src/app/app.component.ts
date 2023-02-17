import { Component } from '@angular/core';
import { Contacts } from './models/Contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBook';
 
  selectedContact!: Contacts;
  
  onSelectedContact(contact: Contacts) {
    this.selectedContact = contact;
  }


}
