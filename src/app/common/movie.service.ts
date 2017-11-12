import { Injectable } from '@angular/core';
import {Movie} from './Movie';

@Injectable()
export class MovieService {

  private movies: Movie[];

  constructor() {
    this.movies = [
      new Movie(1, 'Alien', 'Ridley Scott', 1979),
      new Movie(2, 'Star Wars', 'George Lucas', 1977),
      new Movie(3, 'Back to the Future', 'Robert Zemeckis', 1985),
      new Movie(3, 'The Terminator', 'James Cameron', 1984),
      new Movie(4, 'Predator', 'John McTiernan', 1987)
    ];
  }

  public getAll(): Movie[] {
    return this.movies;
  }

  public get(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }
}
