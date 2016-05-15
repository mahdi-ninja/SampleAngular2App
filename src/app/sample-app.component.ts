import { Component } from '@angular/core';
import { ContactsComponent } from './+contacts';
import { ContactsService } from './shared'
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AddContactComponent } from './+add-contact';

@Component({
  moduleId: module.id,
  selector: 'sample-app-app',
  templateUrl: 'sample-app.component.html',
  styleUrls: ['sample-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ContactsService, ROUTER_PROVIDERS]
})
@Routes([
  {path: '/contacts', component: ContactsComponent},
  {path: '/add-contact', component: AddContactComponent}
])
export class SampleAppAppComponent {
  title = 'Sample App';
}
