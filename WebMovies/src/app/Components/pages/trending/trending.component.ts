import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { StateService } from '../../../services/state.service';
import { MoviesListComponent } from '../../movies-list/movies-list.component';
import { Movie } from '../../../models/movie.interface';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent,MoviesListComponent],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss'
})
export class TrendingComponent {
  MovieList: Movie[] = []
  stateService = inject(StateService)
  httpService = inject(HttpService);
  ngOnInit() {
    this.getHomeMovies();
  }
  getHomeMovies() {
    this.httpService.getTrendingMovies().subscribe((result: any) => {
      this.MovieList  = result
    })
  }
}
