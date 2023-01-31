import { Component } from '@angular/core';
import {Movie} from "./shared/movie";

type ViewState = 'list' | 'details';
@Component({
  selector: 'yh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  movie?:Movie;
  viewState: ViewState = 'list';

  showList() {
    this.viewState = 'list';
  }
  showDetails(movie: Movie) {
    this.movie = movie;
    this.viewState = 'details'
  }

}
