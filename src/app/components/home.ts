/**
 * Import decorators and services from angular
 */
import {Component, OnInit, NgZone} from '@angular/core';
import { FormsModule, provideForms, disableDeprecatedForms } from '@angular/forms';
import { MessageListComponent } from './messageList.component';

/**
 * Include firebaseAuth from Firebase2 package
 */
import * as firebase from 'firebase';

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
       <h3>List of submitted messages</h3>
       <ae-message-list [messages]="messages"></ae-message-list>
    </div>
    `
})
export class HomeComponent implements OnInit {
  name: string;
  messageText: string = '';
  messages: Object[];

  constructor(private ngZone: NgZone) {
    this.name = 'Firebase SDK 3';
  }

  ngOnInit() {
    this.subscribeToMessages();
  }

  // Clear out the textbox
  clearBox() {
    this.messageText = '';
  }

  // Add a new message to fireabse
  addMessage() {
    console.log('Adding new message', this.messageText);
    firebase.database().ref('messages').push({
      text: this.messageText
    });
    this.clearBox();
  }

  // This would normally be in a service
  subscribeToMessages() {
    this.ngZone.run(() => {
      firebase.database().ref('messages').on('value', snapshot => {
        console.log('Loaded data from firebase');
        let messages_obj = snapshot.val();
        this.messages = Object.keys(messages_obj).map(function (k) { return messages_obj[k]; });
        console.log(this.messages);
      });
    });
  }
}
