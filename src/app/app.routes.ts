import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register'
  },
  {
    path: '', redirectTo: 'login', pathMatch: "full",
  }
];
