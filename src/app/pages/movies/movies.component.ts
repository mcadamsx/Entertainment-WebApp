import {Component, inject} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf} from "@angular/common";
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {TrendingComponent} from "../../components/trending/trending.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MovieListComponent,
    NgForOf,
    SearchComponent,
    SidebarComponent,
    TrendingComponent,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {

  movieList: MoviesInterface[] = [];
  movieService: MovieServiceService = inject(MovieServiceService);
  constructor(private router: Router) {
    this.movieList = this.movieService.getAllMovies();
  }


}
