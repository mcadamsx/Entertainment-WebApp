import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../interface/movies-interface';
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  protected movies: MoviesInterface [] = [];

  constructor(private http: HttpClient) {}
  getAllMovies(): MoviesInterface[] {
    this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
    return this.movies;
  }
}

