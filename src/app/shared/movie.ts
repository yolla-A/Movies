import {Thumbnail} from "./thumbnail";

export interface Movie
{
  name:string,
  description?: string,
  thumbnails: Thumbnail[],
  category: string,
  itemNumber: string,
  actors:string[],
  duration:number,
  timing:string[]

}
