import { Component } from '@angular/core';
import { AuthService } from 'app/services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: String = '';
  queryParams: any;

  constructor(public auth: AuthService, private router: Router) {}

  goToBandsList() {
    this.router.navigate(['./list'], {
      queryParams: {
        q: this.searchQuery
      }
    });
  }
}
