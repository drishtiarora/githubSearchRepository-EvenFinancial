import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://api.github.com/search/repositories?q=drishti+fork:true';

  constructor(private http: HttpClient) { }

  getSearchResults(): Observable<any> {
    return this.http.get(this.url);
  }
}
