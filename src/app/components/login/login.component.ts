import { Component,  } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth.service";
import {response} from "express";
import {Router} from'@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required]]
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router ) {}
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password']
  }
  loginUser(){
   const{ email,password} = this.loginForm.value;
   this.authService.getUserByEmail(email as string).subscribe(
     response =>{
       if (response.length > 0 && response[0].password === password){
         sessionStorage.setItem('email', email as string)
         this.router.navigate(['./home']);
       }else{
         console.error("email or password is wrong")
       }
     },
     error => {
       console.error("email or password is wrong")
     }
   )
  }

}
