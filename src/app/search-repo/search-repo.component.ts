import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  licenseArray = ['MIT', 'ISC', 'Apache', 'GPL'];
  formData;
  itemsObject;
  repoOwnerName;
  repoName;
  repoUrl;
  repoDescription;
  numberOfStars;
  license;
  fork;
  searched = false;
  errorMessage;

  searchForm = new FormGroup({
    text: new FormControl('', Validators.required),
    stars: new FormControl('', Validators.required),
    license: new FormControl(this.licenseArray[0], Validators.required),
    forked: new FormControl(true)
  });

  constructor(private searchRepo: SearchService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.getSearchResults(this.searchForm.value);
  }

  getSearchResults(formValue) {
    this.searchRepo.getSearchResults(formValue)
      .subscribe((response) => {
        if (response.total_count > 0) {
          this.itemsObject = response.items;
          this.searched = true;
          this.errorMessage = "";
        }
        else {
          this.searched = false;
          this.errorMessage = "No results found";
        }
      }, error => {
        this.errorMessage = "Sorry, try again";
      })
  }

  checkField(event: any) {

    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;

    if (charCode !== 46 && charCode !== 61 && charCode !== 62 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}