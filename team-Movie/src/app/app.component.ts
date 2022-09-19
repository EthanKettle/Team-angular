import { Component} from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { Movies } from './interfaces/movies';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchText!: string;
  movies: Movies[] = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {

  }

  sendSearch() {
    this.movieService.searchByName(this.searchText).subscribe(movies => this.movies = movies);
  }

  sendTrends() {
    this.movieService.findTrends().subscribe(movies => this.movies = movies);
  }

  title = 'team-Movie';
}
