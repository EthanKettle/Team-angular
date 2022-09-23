import { Component} from '@angular/core';
import { Movies } from './interfaces/movies';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  constructor(
  ) { }

  ngOnInit(): void {

  }

  title = 'team-Movie';
}