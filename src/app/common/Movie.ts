export class Movie {

  private _id: number;
  private _title: string;
  private _director: string;
  private _year: number;

  constructor(id: number, title: string, director: string, year: number) {
    this._id = id;
    this._title = title;
    this._director = director;
    this._year = year;
  }

  get id(): number {
    return this._id;
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
}
