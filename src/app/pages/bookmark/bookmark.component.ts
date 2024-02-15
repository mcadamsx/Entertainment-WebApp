import {Component, inject} from '@angular/core';
import {SearchComponent} from "../../components/search/search.component";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {Router} from "@angular/router";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [
    SearchComponent,
    SidebarComponent,
    MovieListComponent,
    NgForOf,
    NgIf,
  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css',
})
export class BookmarkComponent {
  bookmarkList: MoviesInterface[] = [];
  bookmarkService: MovieServiceService = inject(MovieServiceService);
  constructor(private router: Router) {
    this.bookmarkList = this.bookmarkService.getBookMarked();
  }
}
