import {
    async,
    inject,
    TestBed,
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Libraries
 */
import 'firebase';
import { AngularFire, AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

/**
 * Basic configuration like Endpoint URL's, API version..
 */
const options = require('./../config.json');

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

describe('App component', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        ],
        providers: [
            HomeComponent,
        ],
    }));

    it('should have default data', inject([HomeComponent], (home: HomeComponent) => {
        expect(home.name).toEqual('Firebase SDK 3');
    }));
});
