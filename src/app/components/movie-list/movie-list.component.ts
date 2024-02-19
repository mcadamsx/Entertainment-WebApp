import {Component, inject, Input} from '@angular/core';
import {MoviesInterface} from "../../interface/movies-interface";
import {HomeComponent} from "../../pages/home/home.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BookmarkComponent} from "../../pages/bookmark/bookmark.component";
import {MovieServiceService} from "../../services/movie-service.service";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() movieList!: MoviesInterface;
  constructor(private rs: MovieServiceService) {}
  addToBookmark(movieList: MoviesInterface){
    if (movieList.isBookmarked) {
      movieList.isBookmarked = false;

     this.rs.addToBookmark(movieList)
    } else {
      movieList.isBookmarked = true;
      this.rs.addToBookmark(movieList)

    }

    }



}






