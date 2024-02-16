import { Component, inject, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SearchComponent} from "../../components/search/search.component";
import {TrendingComponent} from "../../components/trending/trending.component";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {NgForOf} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    TrendingComponent,
    MovieListComponent,
    NgForOf,
    SidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  movieList: MoviesInterface [] = [];
  constructor(private rs:MovieServiceService) {}
  ngOnInit(): void{
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response;

    });

  }

}
