/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Libraries
 */
import { AngularFire, AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

/**
 * Import our child components
 */
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { AppComponent } from './components/app.component';

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

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    ],
    declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
