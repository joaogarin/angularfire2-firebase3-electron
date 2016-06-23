/**
 * Import decorators and services from angular
 */
import {Component, Inject} from '@angular/core';

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
    this.name = 'Firebase';
  }
}
