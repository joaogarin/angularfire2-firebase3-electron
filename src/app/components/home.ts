/**
 * Import decorators and services from angular
 */
import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'ae-home',
  template: `
    <div>
       <h1>{{name}}</h1>
       <input [(ngModel)]='name' />
       <ul>
          <li *ngFor="let item of items | async">
            {{ item.name }}
          </li>
       </ul>
    </div>
    `
})
export class HomeComponent {
  name: string;
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.name = 'Firebase';
    this.items = af.database.list('/items');
  }
}
