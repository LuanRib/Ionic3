import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=f41592991a3de278cac3bc2edfef62b4`);
  }

  getMoviesDetail(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=f41592991a3de278cac3bc2edfef62b4`);
  }

}
