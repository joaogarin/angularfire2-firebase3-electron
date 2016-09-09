/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Libraries
 */
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/**
 * Include firebaseAuth from Firebase2 package
 */
@Component({
    selector: 'ae-login',
    template: `
    <div>
       <h1>Login to firebase with Google</h1>
       <div>
        <button type="submit" value="login" (click)="login();">Login with Google</button>
       </div>
    </div>
    `
})
export class LoginGoogleComponent implements OnInit {
    constructor(private af: AngularFire) { }

    ngOnInit() { }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });
    }
}
