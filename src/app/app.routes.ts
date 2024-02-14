import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
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
