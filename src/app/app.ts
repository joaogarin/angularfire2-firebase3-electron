/*
 * Providers provided by Angular
 */
import {Component} from '@angular/core';

// ROUTER
import {ROUTER_DIRECTIVES} from '@angular/router';

/**
 * Import our child components
 */
import {HomeComponent} from './components/home';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'ae-app', // <app></app>
    directives: [ROUTER_DIRECTIVES, HomeComponent],
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {

}

/**
 * Import the bootstrap from the main-boot module
 */
import {bootStrapCall} from './main-boot';
bootStrapCall();
