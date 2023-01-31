import {Injectable,OnInit} from "@angular/core";
import {Movie} from "./movie";

@Injectable({
  providedIn:'root'
})

export class MovieStoreService implements OnInit{
  movies:Movie[];
  constructor() {
    this.movies=[
      {
        name:'Brave heart',
        description :'History ',
        thumbnails:[{
          url:'https://i.ebayimg.com/images/g/WmEAAOSwyhtjDiwz/s-l500.jpg',
          title:'poster of Brave heart'
        }],
        itemNumber:'1',
        category:'History',
        actors:['Mel Gibson','James Robenson '],
        duration:120,
        timing:['4 Pm','8 pm']
      },
      {
        name:'The Count of Monte Cristo',
        description :'The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel written by French author Alexandre Dumas (père) completed in 1844 ',
        thumbnails:[{
          url:'https://i.ebayimg.com/images/g/EfUAAOSwnB1hu-3b/s-l500.jpg',
          title:'poster of The Count of Monte Cristo'
        }],
        itemNumber:'2',
        category:'Adventure novel',
        actors:['James Caviezel','Guy Pearce '],
        duration:120,
        timing:['4 Pm','8 pm']
      }
    ]
  }
  ngOnInit(): void {

  }
  getAll(): Movie[] {
    return this.movies;
  }
  getSingle(number: string | null): Movie | undefined {
    return this.movies.find(film => film.itemNumber === number )
  }
}
//CRUD
