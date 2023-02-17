import { Component, EventEmitter, Input, Output } from '@angular/core';
import { contacts, Contacts } from '../../models/Contact';
import { ContactDataService } from '../../contact-data.service';
import { ContactService } from 'src/app/contact.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  contacts = contacts;


    deleteContact(contact: { name: string; email: string; number: string; }) {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
    

    // @Input() selectedContact!: Contacts;

    // @Output() selectedContactChanged = new EventEmitter<Contacts>();

    // editContact(contact: Contacts) {
    //   alert(contact.name)
    //   this.selectedContact = contact;
    //   this.selectedContactChanged.emit(this.selectedContact);
    // }



    constructor(private contactService: ContactService) {}

    editContact(contact: Contacts) {

      this.contactService.selectedContact.next(contact);
  
      // this.contactService.selectContact(contact);
      // (this.contactService as ContactService)['selectedContact'](contact);
    }


 
  
    




  

}
