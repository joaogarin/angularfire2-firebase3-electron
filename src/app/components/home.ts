/**
 * Import decorators and services from angular
 */
import {Component} from '@angular/core';

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
    </div>
    `
})
export class HomeComponent {
  name: string;

  constructor() {
    this.name = 'Firebase SDK 3';
  }
}
