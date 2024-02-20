import { Component, OnInit } from '@angular/core';
import {TrendingComponent} from "../../components/trending/trending.component";
import {MovieListComponent} from "../../components/movie-list/movie-list.component";
import {MoviesInterface} from "../../interface/movies-interface";
import {MovieServiceService} from "../../services/movie-service.service";
import {NgForOf} from "@angular/common";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TrendingComponent,
    MovieListComponent,
    NgForOf,
    SidebarComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movieList: MoviesInterface[] = [];
  TrendingList: MoviesInterface [] = [];
  constructor(private rs: MovieServiceService) {}
  ngOnInit(): void {
    this.rs.getAllMovies().subscribe((response: MoviesInterface[]) => {
      this.movieList = response;
      this.TrendingList = response.filter(
        (mov) => mov.isTrending,
      );
    });
  }
  userSearch: any;
  search() {
    if (this.userSearch == "") {
      this.ngOnInit();
    }else{
      this.movieList = this.movieList.filter(res =>{
        return res.title.toLocaleLowerCase().match(this.userSearch.toLocaleLowerCase())
      } )
    }
  }
}

