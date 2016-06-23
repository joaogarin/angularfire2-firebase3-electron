/*
 * Providers provided by Angular
 */
import {Component} from '@angular/core';

// ROUTER
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

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
@RouteConfig([
    { path: '/', component: HomeComponent, name: 'Home' },
    { path: '/home', component: HomeComponent, name: 'Home' }
])
export class AppComponent {

}

/**
 * Import the bootstrap from the main-boot module
 */
import {bootStrapCall} from './main-boot';
bootStrapCall();
