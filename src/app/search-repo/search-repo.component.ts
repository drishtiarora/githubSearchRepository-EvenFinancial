import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  licenseArray = ['MIT', 'ISC', 'Apache', 'GPL'];
  searchForm : FormGroup;

  constructor(private searchRepo: SearchService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getSearchResults();
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      text: [''],
      stars: [],
      license: this.licenseArray[0],
      forked: [false]
    });
  }


  getSearchResults(){
    this.searchRepo.getSearchResults()
    .subscribe((response)=>{
      console.log(response);
    })
  }
}
