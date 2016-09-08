/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Include firebaseAuth from Firebase2 package
 */
@Component({
    selector: 'ae-login',
    template: `
    <div>
       <h1>Login to firebase</h1>
       <div [formGroup]="loginForm" class="add-messages-wrapper">
        <input type="email" formControlName="email"/>
        <input type="password" formControlName="password"/>
        <button type="submit" value="login" (click)="login();">Login</button>
       </div>
    </div>
    `
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private af: AngularFire) {}

    ngOnInit() {}

    login() {
        this.af.auth.login({
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
        });
    }
}
