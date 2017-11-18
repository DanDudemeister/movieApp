export class Movie {

  private _title: string;
  private _director: string;
  private _year: number;
  private _genres: string[];
  private _stars: string[];

  constructor(title: string, director: string, year: number, genres: string[], stars: string[]) {
    this._title = title;
    this._director = director;
    this._year = year;
    this._genres = genres;
    this._stars = stars;
  }

  get title(): string {
    return this._title;
  }

  get director(): string {
    return this._director;
  }

  get year(): number {
    return this._year;
  }

  get genres(): string[] {
    return this._genres;
  }

  get stars(): string[] {
    return this._stars;
  }
}
