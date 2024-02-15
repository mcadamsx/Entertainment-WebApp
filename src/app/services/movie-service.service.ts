import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../interface/movies-interface';
import {environment} from "../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  protected movies: MoviesInterface [] = [];
  protected series: MoviesInterface [] = [];
  protected movie: MoviesInterface [] = [];

  constructor(private http: HttpClient) {}
  getAllMovies(): MoviesInterface[] {
    this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
    return this.movies;
  }
  getAllSeries(): MoviesInterface[] {
    this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
      this.series = data.filter(movie => movie.category.includes("TV Series"));
    });
    return this.series;
  }
  getMovies(): MoviesInterface[] {
    this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`).subscribe((data) => {
      this.movie = data.filter(movie => movie.category.includes("Movie"));
    });
    return this. movie;
  }




}

