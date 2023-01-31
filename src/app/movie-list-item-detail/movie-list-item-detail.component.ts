import {Component, OnInit} from '@angular/core';
import {Movie} from "../shared/movie";
import {MovieStoreService} from "../shared/movie-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'yh-movie-list-item-detail',
  templateUrl: './movie-list-item-detail.component.html',
  styleUrls: ['./movie-list-item-detail.component.css']
})
export class MovieListItemDetailComponent implements OnInit {
  movie?: Movie;

  constructor(private mss:MovieStoreService, private rout: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.rout.snapshot.paramMap;
    this.movie = this.mss.getSingle(params.get('itemNumber')|| ''); //itemNumber should be of
    // the same name in the path in of routes in app-routing.modules.ts also in movie interface.
  }
}
