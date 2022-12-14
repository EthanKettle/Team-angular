import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from '../interfaces/movies';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  searchByName(searchText: string): Observable<Movies[]> {
    const alteredText = searchText.replace(/\s/g, '+');
    return this.http.get<any>(`
    https://api.themoviedb.org/3/search/movie?api_key=${environment.movieAPI}&language=en-US&query=${alteredText}&page=1&include_adult=true`)
    // .pipe(
    //     map(response => response['movies'])
    // )
  };

  findTrends(): Observable<Movies[]> {
    return this.http.get<any>(`https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.movieAPI}`)
    // .pipe(
    //     map(response => response['movies'])
    // )
  };
}
