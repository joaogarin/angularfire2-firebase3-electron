/**
 * Import decorators and services from angular
 */
import {Component, OnInit, NgZone} from '@angular/core';
import { MessageListComponent } from './messageList.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Include firebaseAuth from Firebase2 package
 */
//import * as firebase from 'firebase';

@Component({
  selector: 'ae-home',
  directives: [MessageListComponent],
  template: `
    <div>
       <h1>{{name}}</h1>
       <h3>Add a new message</h3>
       <div class="add-messages-wrapper">
        <input type="text" [(ngModel)]='messageText' />
        <button type="submit" value="submit" (click)="addMessage();">Submit</button>
       </div>
       <h3>List of items</h3>
       <ul>
          <li class="text" *ngFor="let item of items | async">
            {{item.text}}
          </li>
        </ul>
    </div>
    `
})
export class HomeComponent implements OnInit {
  name: string;
  messageText: string = '';
  items: FirebaseListObservable<any[]>;

  constructor(private ngZone: NgZone, private af: AngularFire) {
    this.name = 'Firebase SDK 3';
    this.items = af.database.list('messages');
  }

  ngOnInit() {
    //this.subscribeToMessages();
  }

  // Clear out the textbox
  clearBox() {
    this.messageText = '';
  }

  // Add a new message to fireabse
  addMessage() {
    this.af.database.list('messages').push({
      text: this.messageText
    });
    this.clearBox();
  }
}
