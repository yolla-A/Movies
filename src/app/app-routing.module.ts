import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListItemDetailComponent} from "./movie-list-item-detail/movie-list-item-detail.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [

  {path:''
    ,redirectTo:'/home',
    pathMatch:'full'},
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'movies',
    component: MovieListComponent
  },
  {
    path:'movies/:itemNumber',
    component: MovieListItemDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
