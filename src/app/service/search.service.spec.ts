import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('SearchService', () => {
  let httpMock: HttpClientTestingModule;
  let httpClient: HttpClient;
  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, SearchService]
    });

    service = TestBed.get(SearchService);
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieve searchresults based on the form', () => {
    let formData = {
      text: "react",
      stars: ">5",
      license: "MIT",
      forked: true
    }
    service.getSearchResults(formData);
    expect(service.url).toBe('https://api.github.com/search/repositories?q=react+license:MIT+stars:>5+fork:true');
  });
});
