/**
 * Import decorators and services from angular
 */
import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

/**
 * Include firebaseAuth from Firebase2 package
 */
import * as firebase from 'firebase';

@Component({
  selector: 'ae-message-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul>
      <li *ngFor='let message of messages; let i = index'>
          {{message.text}}
      </li>
    </ul>
    `
})
export class MessageListComponent implements OnInit {
  @Input() messages: Object[];

  constructor() {
  }

  ngOnInit() {
  }
}
