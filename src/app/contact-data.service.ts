import { Injectable } from '@angular/core';
import { Contacts } from './models/Contact'

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  private selectedContact!: Contacts;

  constructor() { }

  setSelectedContact(contact: Contacts) {
    this.selectedContact = contact;
  }

  getSelectedContact(): Contacts {
    return this.selectedContact;
  }
}
