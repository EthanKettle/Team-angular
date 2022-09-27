import { Component, OnInit } from '@angular/core';
import { ListType } from 'src/app/enums/lists';
import { Movies } from 'src/app/interfaces/movies';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  movies: Movies[] = [];
  savedMovies: {[id: string]: Movies} = {};

  constructor(
    private movieService: MoviesService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.sendTrends();
  }

  sendTrends() {
    this.movieService.findTrends().subscribe((movies: any) => {
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
