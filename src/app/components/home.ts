/**
 * Import decorators and services from angular
 */
import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Include firebaseAuth from Firebase2 package
 */
@Component({
  selector: 'ae-home',
  template: `
    <div>
       <h1>{{name}}</h1>
       <h3>Add a new message</h3>
       <div [formGroup]="messageForm" class="add-messages-wrapper">
        <input type="text" formControlName="messageText"/>
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

  messageForm = new FormGroup({
    messageText: new FormControl(),
  });

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
      text: this.messageForm.controls['messageText'].value
    });
    this.clearBox();
  }
}
