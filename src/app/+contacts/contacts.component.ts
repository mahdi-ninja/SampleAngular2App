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
  
  deleteContact(id:number) : void {
    var index = this.contacts.findIndex(c => c.id == id);
    if(index > -1) {
      this.contacts.splice(index, 1);
    }
  }

  constructor(private _contactsService: ContactsService) {}

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

}
