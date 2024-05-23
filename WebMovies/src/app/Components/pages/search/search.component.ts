import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { StateService } from '../../../services/state.service';
import { HeaderSearchComponent } from '../../header-search/header-search.component';
import { MoviesListComponent } from '../../movies-list/movies-list.component';
import { Movie } from '../../../models/movie.interface';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent, HeaderSearchComponent, MoviesListComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  newMovie = "";
  initialMovieList: Movie[] = []
  MovieList: Movie[] = []
  stateService = inject(StateService)
  httpService = inject(HttpService);
  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      if (value) {
        this.httpService.getSearchMovies(value).subscribe((result: any) => {
          this.MovieList = this.MovieList = result
        })
      }
      else {
        this.MovieList = this.initialMovieList;
      }
    });
    this.getAllMovies();
  }

  getAllMovies() {
    this.httpService.getAllMovies().subscribe((result: any) => {
      this.initialMovieList = this.MovieList = result
    })
  }
}