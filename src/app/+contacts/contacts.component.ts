import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  
  constructor(private _contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

}
