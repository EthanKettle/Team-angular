import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
  movies: Movies[] = [];

  constructor(
    private movieService: MoviesService
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

}
