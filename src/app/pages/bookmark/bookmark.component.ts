import {Component, inject} from '@angular/core';
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [
    SearchComponent,
    SidebarComponent,
    MovieListComponent,
    NgForOf,
    NgIf,
    FormsModule,
  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent {
  BookmarkedMovieList: MoviesInterface[] = [];
  BookmarkedSeriesList: MoviesInterface[] = [];
  userSearch: any;
  constructor(private rs: MovieServiceService) {}
  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.BookmarkedMovieList = response.filter(
        (mov) => mov.category.includes('Movie') && mov.isBookmarked,
      );
      this.BookmarkedSeriesList = response.filter(
        (mov) => mov.category.includes('TV Series') && mov.isBookmarked,
      );
    });
  }
  search() {

    if (this.userSearch) {
      this.BookmarkedMovieList = this.BookmarkedMovieList.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.userSearch.toLocaleLowerCase());
      });
    }
    if (this.userSearch){
      this.BookmarkedSeriesList = this.BookmarkedSeriesList.filter((res) => {
        return res.title
          .toLocaleLowerCase()
          .match(this.userSearch.toLocaleLowerCase());
      });
    }else{
      this.ngOnInit();
    }
  }
}
