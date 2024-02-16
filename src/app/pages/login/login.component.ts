import { Component,  } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import{MovieServiceService} from "../../services/movie-service.service";
import {Router} from'@angular/router'
import {ToastrService} from "ngx-toastr";


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
  constructor(private fb: FormBuilder, private authService: MovieServiceService, private router:Router, private toaster: ToastrService ) {}
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
           this.toaster.success('welcome back!', ' login successfully');
         this.router.navigate(['./home']);
       }else{
         this.toaster.error('email or password invalid', ' Sorry');
       }
     },
     error => {
       console.error("email or password is wrong")
     }
   )
  }

}
