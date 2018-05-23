import { Component, OnInit } from '@angular/core';
import {BandsService} from '../services/bands.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  bandsCardsData = [];

  constructor(private bandsService: BandsService) {}

  ngOnInit() {
    this.loadBandsInBandsService();
    console.log(this.bandsCardsData);
  }

  assignBandsFromServiceToThisComponent() {
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      this.bandsCardsData.push(Object.assign({}, this.bandsService.bands[i]));
    }
  }

  loadBandsInBandsService() {
    if (this.bandsCardsData.length === 0) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe((data) => {
              this.assignBandsFromServiceToThisComponent();
            },
            (err) => {
              console.log('error: ', err);
            },
            () => {
              console.log('completed in ngOnInit of mainpage');
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent();
      }
    }
  }

}
