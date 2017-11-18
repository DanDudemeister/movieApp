import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../common/Movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() public movie: Movie;

  constructor() { }

  ngOnInit() {
  }
}
