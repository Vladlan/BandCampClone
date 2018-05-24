import { Component, OnInit } from '@angular/core';
import {BandsService} from '../services/bands.service/bands.service';

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
          .subscribe(() => {
              this.assignBandsFromServiceToThisComponent();
            },
            (err) => {
              console.log('error: ', err);
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent();
      }
    }
  }

}
