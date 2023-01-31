import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Movie} from "../shared/movie";
import {MovieStoreService} from "../shared/movie-store.service";

@Component({
  selector: 'yh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies!: Movie[];
  @Output() showDetailsEvent = new EventEmitter<Movie>();

  constructor(private mss: MovieStoreService) {
  }

  ngOnInit(): void {       // muss
    this.movies = this.mss.getAll();
  }

  showDetails(movie: Movie) {
    this.showDetailsEvent.emit(movie);
  }
}
