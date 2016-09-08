import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];
