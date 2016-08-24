/*
 * Angular Modules
 */
import {provide, enableProdMode, PLATFORM_DIRECTIVES, NgModule, Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic, bootstrap } from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * Libraries
 */
import { AngularFireModule } from 'angularfire2';

/**
 * Providers
 */
import {PROVIDERS} from './providers/providers';

/**
 * Import our child components
 */
import {HomeComponent} from './components/home';


/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./config.json');

import * as firebase from 'firebase';

// Initialize Firebase
export const firebaseConfig = {
    apiKey: options.firebase.apiKey,
    authDomain: options.firebase.authDomain,
    databaseURL: options.firebase.databaseURL,
    storageBucket: options.firebase.storageBucket,
};


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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [AppComponent],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ...PROVIDERS,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

/*bootstrap(AppComponent, [
    ...PROVIDERS,
  ]);*/
