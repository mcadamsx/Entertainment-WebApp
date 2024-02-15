import {Component, inject} from '@angular/core';
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [SearchComponent, SidebarComponent],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent {
  movieList: MoviesInterface[] = [];
  movieService: MovieServiceService = inject(MovieServiceService);
  constructor(private router: Router) {
    this.movieList = this.movieService.getAllMovies();
  }


}
