import { Component, OnInit } from '@angular/core';
import {MovieService} from '../common/movie.service';
import {Movie} from '../common/Movie';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public movieService: MovieService;
  public selectedMovie: Movie;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
    this.selectedMovie = null;
  }

  ngOnInit() {
  }

  public selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
