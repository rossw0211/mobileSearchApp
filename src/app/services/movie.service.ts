import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum SearchType { 
  all = '',  
  series = 'series',
  movie = 'movie'
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = 'http://www.omdbapi.com/';
  apiKey = 'f58f8e26';

  constructor(private http: HttpClient) { } 

  searchData(userInput: string, type: SearchType): Observable<any> { 

    return this.http.get(`${this.baseUrl}?s=${encodeURI(userInput)}&type=${type}&apikey=${this.apiKey}`).pipe( 
      map(results => { 
        console.log('RAW: ', results); 
        return results ['Search'];

      })
    );

  } 

  getDetails(id) { 
    return this.http.get(`${this.baseUrl}?i=${id}&plot=full&apikey=${this.apiKey}`); 

  }
}
