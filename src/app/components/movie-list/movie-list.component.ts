import {Component, Input} from '@angular/core';
import {MoviesInterface} from "../../interface/movies-interface";
import {HomeComponent} from "../../pages/home/home.component";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  @Input() movieList!: MoviesInterface;
}
