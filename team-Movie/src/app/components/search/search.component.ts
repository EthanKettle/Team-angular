import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText!: string;
  movies: Movies[] = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
  }

  sendSearch() {
    this.movieService.searchByName(this.searchText).subscribe((movies: any) => {
      console.log(movies);
      this.movies = movies.results
    });
    console.log(this.movies);
  }

}
