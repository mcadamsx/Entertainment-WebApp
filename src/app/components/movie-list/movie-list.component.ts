import {Component, inject, Input} from '@angular/core';
import {MoviesInterface} from "../../interface/movies-interface";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MovieServiceService} from "../../services/movie-service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() movieList!: MoviesInterface;

  constructor(private rs: MovieServiceService, private toaster: ToastrService) {}
  public addToBookmark(movieList: MoviesInterface){
    if (movieList.isBookmarked) {
      movieList.isBookmarked = false
     this.rs.addToBookmark(movieList)
      this.toaster.success('removed from Bookmark!', ' successfully');
    } else {
      movieList.isBookmarked = true;
      this.rs.addToBookmark(movieList)
      this.toaster.success('Added to Bookmark!', ' successfully');
    }
    }
}







