import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';
import { LoginGoogleComponent } from './components/loginGoogle.component';
import { RegisterComponent } from './components/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-google', component: LoginGoogleComponent },
  { path: 'register', component: RegisterComponent },
];
