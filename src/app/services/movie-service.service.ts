import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../interface/movies-interface';
import {environment} from "../environments/environment.development";
import {Auth} from "../interface/auth";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  protected movies: MoviesInterface [] = [];
  protected series: MoviesInterface [] = [];
  protected movie: MoviesInterface [] = [];
  protected bookmarked: MoviesInterface [] = []

  constructor(private http: HttpClient) {}
  registerUser(userDetails:Auth){
    return this.http.post(`${environment.endPoint}/users`, userDetails)
  }
  getUserByEmail(email:string): Observable<Auth[]>{
    return this.http.get<Auth[]>(`${environment.endPoint}/users?email=${email}`);
  }

  getAllMovies(): Observable<MoviesInterface[]>{
   return this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`)
  }
  // getAllSeries(): MoviesInterface[] {
  //   this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
  //     this.series = data.filter(movie => movie.category.includes("TV Series"));
  //   });
  //   return this.series;
  // }
  // getMovies(): MoviesInterface[] {
  //   this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
  //     this.movie = data.filter(movie => movie.category.includes("Movie"));
  //   });
  //   return this. movie;
  // }





}

