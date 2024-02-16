import {Component, inject} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {TrendingComponent} from "../../components/trending/trending.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";
import {app} from "../../../../server";
import {response} from "express";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MovieListComponent,
    NgForOf,
    SearchComponent,
    SidebarComponent,
    TrendingComponent,
    NgIf,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  movieList: MoviesInterface [] = [];
  constructor(private rs:MovieServiceService) {}
  ngOnInit(): void{
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response.filter(mov=>mov.category.includes("Movie"))

    });

  }

}
