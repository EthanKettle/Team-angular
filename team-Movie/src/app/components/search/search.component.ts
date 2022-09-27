import { Component, OnInit } from '@angular/core';
import { ListType } from 'src/app/enums/lists';
import { Movies } from 'src/app/interfaces/movies';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MoviesService } from 'src/app/services/movies.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText!: string;
  movies: Movies[] = [];
  savedMovies: {[id: string]: Movies} = {};

  constructor(
    private movieService: MoviesService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.getMovieList(ListType.USERLIST);

    this.localStorageService.savedMovies.subscribe((value: any) => this.savedMovies = _.mapKeys(this.movies, 'id'));
  }

  sendSearch() {
    this.movieService.searchByName(this.searchText).subscribe((movies: any) => {
      console.log(movies);
      this.movies = movies.results
    });
    console.log(this.movies);
  }

  updateSavedList(event: MouseEvent, movie: Movies) {
    event.stopPropagation();

    if (this.savedMovies[movie.id]) {
        this.localStorageService.removeMovie(movie, ListType.USERLIST);
    } else {
      this.localStorageService.saveMovie(movie, ListType.USERLIST);
    }
  }
}
