import { RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home';

export const routes: RouterConfig = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
];
