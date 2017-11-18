import { Component, OnInit } from '@angular/core';
import {MovieService} from '../common/movie.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public movieService: MovieService;
  public selectedMovieId: number;

  constructor(movieService: MovieService) {
    this.movieService = movieService;
    this.selectedMovieId = null;
  }

  ngOnInit() {
  }

  public selectMovie(id: number): void {
    this.selectedMovieId = id;
  }
}
