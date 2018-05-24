import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchQuery: String = '';
  constructor(private router: Router) {}

  ngOnInit() {}

  goToBandsList() {
    this.router.navigate(['./bandsList'], {
      queryParams: {
        searchQuery: this.searchQuery
      }
    });
  }
}
