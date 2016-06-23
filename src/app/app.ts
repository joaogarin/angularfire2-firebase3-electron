/*
 * Providers provided by Angular
 */
import {Component, provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// ROUTER
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

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

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(AppComponent, [
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
]).catch(err => console.error(err));
