/**
 * Import decorators and services from angular
 */
import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable, defaultFirebase} from 'angularfire2';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./../config.json');

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
  ref: firebase.database.Reference;
  app: any;

  constructor(af: AngularFire) {
    this.name = 'Firebase';

    // Initialize ref
    this.app = firebase.initializeApp({
      serviceAccount: options.firebase.serviceAccount,
      databaseURL: options.firebase.databaseURL
    });

    const itemsRef = this.app.database().ref().child('items');
    af.database.list(itemsRef);
  }
}
