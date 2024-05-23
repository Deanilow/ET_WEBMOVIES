import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient = inject(HttpClient);
  constructor() { }

  getHomeMovies() {
    return this.httpClient.get(`${environment.apiUrl}/ApiMovies/v1/Home`)
  }

  getTrendingMovies() {
    return this.httpClient.get(`${environment.apiUrl}/ApiMovies/v1/Trending`)
  }

  getPopularMovies() {
    return this.httpClient.get(`${environment.apiUrl}/ApiMovies/v1/Popular`)
  }

  getSearchMovies(name: string) {
    return this.httpClient.get(`${environment.apiUrl}/ApiMovies/v1/Search/movie/`+ name)
  }

  getAllMovies() {
    return this.httpClient.get(`${environment.apiUrl}/ApiMovies/v1/Movies`)
  }
}