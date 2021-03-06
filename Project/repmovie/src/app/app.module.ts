import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchModelComponent } from './search-model/search-model.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FavListComponent } from './fav-list/fav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchModelComponent,
    SearchListComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
