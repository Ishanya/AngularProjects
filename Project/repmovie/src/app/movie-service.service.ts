import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Movie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private baseUrl1='http://localhost:8001';
  private baseUrl2='http://localhost:8002';

  constructor(private http:HttpClient) { }

  public getMovies(title){
  return this.http.get<Movie[]>(this.baseUrl2+"/search/"+title);
  }

  public getFavList(){
    return this.http.get<Movie[]>(this.baseUrl1+'/favourite');
  }

  public addfavMovie(movie){
    alert(movie.movieId);
    return this.http.post(this.baseUrl1+'/favAdd/'+movie.movieId, movie.movieId);
  }
}
