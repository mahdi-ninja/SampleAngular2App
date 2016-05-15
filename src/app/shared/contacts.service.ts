import { Injectable } from '@angular/core';
import { Contact } from './contact.model'

@Injectable()
export class ContactsService {

  constructor() {}

  getContacts(): Contact[] {
    return [{
      firstName: 'Zane',
      lastName: 'Craven',
      address: '51 Passage Avenue EAST BARRON QLD 4883',
      phone: '(07) 4074 4534',
      email: 'ZaneCraven@email.com',
      dob: new Date('1991-02-02T00:00:00')
    }, {
      firstName: 'Sean',
      lastName: 'Lonsdale',
      address: '42 Murphy Street MOKINE WA 6401',
      phone: '(08) 9001 1939',
      email: 'SeanLonsdale@email.com',
      dob: new Date('1978-03-11T00:00:00')
    }, {
      firstName: 'Chloe',
      lastName: 'Patten',
      address: '3 Scenic Road SAWPIT CREEK NSW 2627',
      phone: '(02) 6142 8222',
      email: 'ChloePatten@email.com',
      dob: new Date('1968-11-16T00:00:00')
    }];
  }
}
