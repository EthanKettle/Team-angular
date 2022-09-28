import { Component, OnInit } from '@angular/core';
import { ListType } from 'src/app/enums/lists';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Movies } from 'src/app/interfaces/movies';
import { Subject, tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.scss']
})
export class UserItemsComponent implements OnInit {
  unsubscribe = new Subject<void>();
  listType: ListType;
  savedMovies: Movies[];
  dataSource: Movies[];
  displayedColumns = ['title', 'poster_path', 'overview', 'vote_average', 'vote_count', 'delete'];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorageService.getMovieList(ListType.USERLIST);
    this.localStorageService.savedMovies.pipe(
      takeUntil(this.unsubscribe),
        tap(movie => {
            console.log('subscription data');
            this.savedMovies = movie;
            console.log(movie);
            
        })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  deleteMovie(movie: Movies) {
   this.localStorageService.removeMovie(movie, ListType.USERLIST);
  //  this.localStorageService.savedMovies.pipe(
  //   takeUntil(this.unsubscribe),
  //     tap(movie => {
  //         console.log('subscription data');
  //         this.savedMovies = movie;
  //         console.log(movie);
          
  //     })
  // ).subscribe();
  }
}
