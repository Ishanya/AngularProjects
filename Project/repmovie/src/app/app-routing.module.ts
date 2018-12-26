import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './fav-list/fav-list.component';
import { SearchListComponent } from './search-list/search-list.component';

const routes: Routes = [
  {path:"fav-list", component:FavListComponent},
  {path:"search-list", component:SearchListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
