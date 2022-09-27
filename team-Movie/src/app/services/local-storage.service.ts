import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListType } from '../enums/lists';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  savedMovies = new BehaviorSubject<Movies[]>([]);
  movielist: any;

  constructor() { }

  saveMovie(movie: Movies, listType: ListType) {
    let movieList: Movies[] = JSON.parse(window.localStorage.getItem(listType.valueOf()));
    if (!movieList) {
        movieList = [movie];
    } else {
        movieList = [...movieList, movie];
    }
    window.localStorage.setItem(listType.valueOf(), JSON.stringify(movieList));

    const parsedUpdateList = JSON.parse(window.localStorage.getItem(listType.valueOf()));
    if (listType === ListType.USERLIST) {
        this.savedMovies.next(parsedUpdateList);
    }
  }

  removeMovie(movie: Movies, listType: ListType) {
    let movieList: Movies[] = JSON.parse(window.localStorage.getItem(listType.valueOf()));
    const movieIndex = movieList.findIndex(currMovie => currMovie.id === movie.id);
    if (movieIndex > -1) {
      movieList.splice(movieIndex, 1)
        window.localStorage.setItem(listType.valueOf(), JSON.stringify(movieList));
    }

    const parsedUpdateList = JSON.parse(window.localStorage.getItem(listType.valueOf()));
    if (listType === ListType.USERLIST) {
        this.savedMovies.next(parsedUpdateList);
    }
  }

  getMovieList(listType: ListType) {
    let list = JSON.parse(window.localStorage.getItem(listType.valueOf()));

    if (listType === ListType.USERLIST) {
        this.savedMovies.next(!list ? [] : list);
    }
}
}
