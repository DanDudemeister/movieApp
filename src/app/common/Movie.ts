export class Movie {

  private _id: number;
  private _name: string;
  private _director: string;
  private _year: number;

  constructor(id: number, name: string, director: string, year: number) {
    this._id = id;
    this._name = name;
    this._director = director;
    this._year = year;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get director(): string {
    return this._director;
  }

  get year(): number {
    return this._year;
  }
}
