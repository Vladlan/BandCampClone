import { Component, OnInit } from '@angular/core';
import {BandsService} from '../bands.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private bandsService: BandsService) { }

  ngOnInit() {
    this.loadBandsInBandsService();
  }

  loadBandsInBandsService() {
    this.bandsService.assignBandsToService()
      .subscribe((data) => {
          console.log('data: ', data);
        },
        (err) => {
          console.log('error: ', err);
        },
        () => {
          console.log('completed in ngOnInit');
        }
      );
  }

}
