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
    selector: 'ae-register',
    template: `
    <div>
       <h1>Register to firebase</h1>
       <div [formGroup]="registerForm">
        <input type="email" formControlName="email"/>
        <input type="password" formControlName="password"/>
        <button type="submit" value="register" (click)="register();">Register</button>
       </div>
    </div>
    `
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private af: AngularFire) {}

    ngOnInit() {}

    register() {
        this.af.auth.createUser({
            email: this.registerForm.controls['email'].value,
            password: this.registerForm.controls['password'].value,
        });
    }
}
