/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Libraries
 */
import { AngularFireModule } from 'angularfire2';

/**
 * Import our child components
 */
import { HomeComponent } from './components/home';

import { routes } from './app.routes';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./config.json');

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
        ReactiveFormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    declarations: [AppComponent, HomeComponent],
    providers: [ // expose our Services and Providers into Angular's dependency injection

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
