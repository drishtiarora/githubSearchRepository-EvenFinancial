import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  text;
  stars;
  license;
  fork;
  url;

  constructor(private http: HttpClient) { }

  getSearchResults(formData): Observable<any> {
    this.text = formData.text;
    this.stars = formData.stars;
    this.license = formData.license;
    this.fork = formData.forked;
    this.url = `https://api.github.com/search/repositories?q=${this.text}+license:${this.license}+stars:${this.stars}+fork:${this.fork}`;
    return this.http.get(this.url);
  }
}
