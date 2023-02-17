import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Contacts } from './models/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;

  constructor() { }


  public selectedContact = new BehaviorSubject<Contacts | null>(null);
  selectedContact$ = this.selectedContact.asObservable();


}
