import {Component, Input,OnInit} from '@angular/core';
import{Movie} from "../shared/movie";

@Component({
  selector: 'yh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit{
  @Input() movie?: Movie;  //this property is a requirement of property binding with movie-list.component
  ngOnInit() {
  }
}
