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
    if(this.firstName == undefined || this.firstName.length == 0)
      return;
    if(this.address == undefined || this.address.length == 0)
      return;

    let parsedDate = Date.parse(this.dob);
    let contact : Contact = {
      id: null,
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      phone: this.phone,
      email: this.email,
      dob: parsedDate ? new Date(parsedDate) : null
    };

    this._contactsService.addContact(contact);
    this._router.navigate(['contacts']); 
  }
  
  cancel() : void {
    this._router.navigate(['contacts']); 
  }
}
