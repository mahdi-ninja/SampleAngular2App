import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact, ContactsService } from '../shared'

@Component({
  moduleId: module.id,
  selector: 'app-add-contact',
  templateUrl: 'add-contact.component.html',
  styleUrls: ['add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  constructor(
    private _contactsService: ContactsService,
    private _router: Router) {}

  ngOnInit() {
  }

  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  dob: string;

  save() : void {
    let contact : Contact = new Contact();
    contact.firstName = this.firstName;
    contact.lastName = this.lastName;
    contact.address = this.address;
    contact.phone = this.phone;
    contact.email = this.email;
    let parsedDate = Date.parse(this.dob);
    contact.dob = parsedDate ? new Date(parsedDate) : null;

    if(contact.isValid()) {
      this._contactsService.addContact(contact);
      this._router.navigate(['contacts']); 
    }
  }
  
  cancel() : void {
    this._router.navigate(['contacts']); 
  }
}
