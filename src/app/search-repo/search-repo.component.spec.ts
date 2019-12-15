import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRepoComponent } from './search-repo.component';
import { SearchService } from '../service/search.service';
import { Observable, of } from '../../../node_modules/rxjs';
import { AppModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';

let searchResponse = {
    "total_count": 5577,
    "incomplete_results": false,
    "items": [
      {
        "id": 63477660,
        "node_id": "MDEwOlJlcG9zaXRvcnk2MzQ3NzY2MA==",
        "name": "Java",
        "full_name": "TheAlgorithms/Java",
        "private": false,
        "owner": {
          "login": "TheAlgorithms",
          "id": 20487725,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjIwNDg3NzI1",
          "avatar_url": "https://avatars1.githubusercontent.com/u/20487725?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/TheAlgorithms",
          "html_url": "https://github.com/TheAlgorithms",
          "followers_url": "https://api.github.com/users/TheAlgorithms/followers",
          "following_url": "https://api.github.com/users/TheAlgorithms/following{/other_user}",
          "gists_url": "https://api.github.com/users/TheAlgorithms/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/TheAlgorithms/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/TheAlgorithms/subscriptions",
          "organizations_url": "https://api.github.com/users/TheAlgorithms/orgs",
          "repos_url": "https://api.github.com/users/TheAlgorithms/repos",
          "events_url": "https://api.github.com/users/TheAlgorithms/events{/privacy}",
          "received_events_url": "https://api.github.com/users/TheAlgorithms/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "description": "All Algorithms implemented in Java",
        "fork": false,
        "size": 1662,
        "stargazers_count": 20405,
        "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
        },
        "forks": 7520,
        "open_issues": 354,
        "watchers": 20405,
        "default_branch": "master",
        "score": 129.5681
      }
    ]
}

class searchServiceStub {
  getSearchResults(): Observable<any> {
    return of(searchResponse);
  }
}

describe('SearchRepoComponent', () => {
  let component: SearchRepoComponent;
  let fixture: ComponentFixture<SearchRepoComponent>;
  let searchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ SearchRepoComponent ],
      providers: [{provide: SearchService, useClass: searchServiceStub}],
  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRepoComponent);
    component = fixture.componentInstance;
    searchService = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get the required search results when form is submitted', () => {
    component.onSubmit();
    expect(component.itemsObject).toBe(searchResponse.items);
    expect(component.searched).toEqual(true);
  });

  it('validating stars input field if valid character is entered', () => {
    const event = {
      keyCode: '62',
      which: '62'
    }
    const isValidChar = component.checkField(event);
    expect(isValidChar).toBe(false);
  });

  it('validating stars input field if not valid character is entered', () => {
    const event = {
      keyCode: '2',
      which: '2'
    }
    const isNotValidChar = component.checkField(event);
    expect(isNotValidChar).toBe(true);
  });
});
