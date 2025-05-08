import {Component, inject} from '@angular/core';
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {TrendingComponent} from "../../components/trending/trending.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    MovieListComponent,
    NgForOf,
    SidebarComponent,
    NgIf,
    TrendingComponent,
    FormsModule,
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  movieList: MoviesInterface[] = [];
  userSearch: String | undefined;

  constructor(private rs: MovieServiceService) {
  }

  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response.filter((mov) =>
        mov.category.includes('TV Series'),
      );
    });
  }

  search() {
    if (this.userSearch == "") {
      this.ngOnInit();
    } else {
      this.movieList = this.movieList.filter(res => {
        // @ts-ignore
        return res.title.toLocaleLowerCase().match(this.userSearch.toLocaleLowerCase())
      })
    }
  }
}
