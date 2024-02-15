import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interface/User";
import {Observable} from "rxjs";
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registerUser(userDetails:User){
    return this.http.post(`${environment.endPoint}/users`, userDetails)
  }
  getUserByEmail(email:string): Observable<User[]>{
    return this.http.get<User[]>(`${environment.endPoint}/users?email=${email}`);
  }

}

