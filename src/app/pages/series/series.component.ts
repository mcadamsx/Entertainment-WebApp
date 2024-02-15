import {Component, inject} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";
import {TrendingComponent} from "../../components/trending/trending.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    MovieListComponent,
    NgForOf,
    SearchComponent,
    SidebarComponent,
    NgIf,
    TrendingComponent,
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  seriesList: MoviesInterface[] = [];
  seriesService: MovieServiceService = inject(MovieServiceService);

  constructor(private router: Router) {
    this.seriesList = this.seriesService.getAllSeries();
  }
}
