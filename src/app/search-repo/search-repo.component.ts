import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

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
  defaultDescription;

  searchForm = new FormGroup({
    text: new FormControl('', Validators.required),
    stars: new FormControl('', Validators.required),
    license: new FormControl(this.licenseArray[0], Validators.required),
    forked: new FormControl(false)
  });

  constructor(private searchRepo: SearchService) { }

  ngOnInit() {
  }

  /**
   * submit event which occurs on clicking of search button and fetches the search results
   */
  onSubmit() {
    this.getSearchResults(this.searchForm.value);
  }

  /**
   * fetches the search results on the basis of data requested by the user
   * @param formValue - An object which has the requested data by the user
   */
  getSearchResults(formValue) {
    this.searchRepo.getSearchResults(formValue)
      .subscribe((response) => {
        if (response.total_count > 0) {
          this.itemsObject = response.items;
          this.searched = true;
          this.errorMessage = "";
          this.defaultDescription = "No description";
        }
        else {
          this.searched = false;
          this.errorMessage = "No results found";
        }
      }, error => {
        this.searched = false;
        this.errorMessage = "Sorry, try again";
      })
  }

/**
 * invokes the keypress event & validation of stars input field
 * @param event - key press event data
 */
  checkField(event: any): boolean {

    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;

    if (charCode !== 46 && charCode !== 61 && charCode !== 62 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}