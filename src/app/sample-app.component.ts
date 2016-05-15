import { Component } from '@angular/core';
import { ContactsComponent } from './+contacts';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sample-app-app',
  templateUrl: 'sample-app.component.html',
  styleUrls: ['sample-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/contacts', component: ContactsComponent}
])
export class SampleAppAppComponent {
  title = 'sample-app works!';
}
