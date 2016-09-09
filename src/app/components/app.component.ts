/*
 * Angular Modules
 */
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Libraries
 */
import { AngularFire } from 'angularfire2';

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'ae-app', // <app></app>
    styles: [`
        .logout {
            cursor: pointer;
        }
    `],
    template: `
    <div>
        <router-outlet></router-outlet>
        <a class="logout" (click)="logout()">Logout</a>
    </div>
    `
})
export class AppComponent {
    constructor(private af: AngularFire, private router: Router) {
        this.af.auth.subscribe(auth => {
            if (auth != null) {
                console.log('Logged in');
                this.router.navigate(['home']);
            } else {
                console.log('Logged out');
            }
        });
    }

    logout() {
        this.af.auth.logout();
    }
}
