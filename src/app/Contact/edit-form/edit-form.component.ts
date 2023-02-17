import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contacts, contacts } from '../../models/Contact';



@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {



   

    newName = '';
    newEmail = '';
    newNumber = '';
  
    constructor(private contactService: ContactService) {
      this.contactService.selectedContact$.subscribe(contact => {
        // Do something with the selected contact data
        console.log(contact);

        if (contact) {
          this.newName = contact.name;
          this.newEmail = contact.email;
          this.newNumber = contact.number;
        }
  
      
      });
    }

    onSubmit() {
      const selectedContact = this.contactService.selectedContact.getValue();

    
      if(selectedContact?.name !='' && selectedContact?.email !='' && selectedContact?.number){
        if (selectedContact) {
          selectedContact.name = this.newName;
          selectedContact.email = this.newEmail;
          selectedContact.number = this.newNumber;
          this.contactService['updateContact'](selectedContact);
        }
       
        
       }
       else{
        alert("missing field")
       }




     
    }



  
    ngOnInit(): void {
      console.log("hello");
    }
  
}
