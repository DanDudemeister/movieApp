import { Injectable } from '@angular/core';
import { Movie } from './Movie';

@Injectable()
export class MovieService {

  private movies: Movie[];

  constructor() {
    this.movies = [
      new Movie('Alien', 'Ridley Scott', 1979, ['Horror', 'Sci-Fi'], ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt']),
      new Movie('Back to the Future', 'Robert Zemeckis', 1985, ['Adventure', 'Comedy', 'Sci-Fi'], ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson']),
      new Movie('The Terminator', 'James Cameron', 1984, ['Action', 'Sci-Fi'], ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn']),
      new Movie('Predator', 'John McTiernan', 1987, ['Action', 'Sci-Fi', 'Thriller'], ['Arnold Schwarzenegger', 'Carl Weathers', 'Kevin Peter Hall'])
    ];
  }

  public getAll(): Movie[] {
    return this.movies;
  }
}
