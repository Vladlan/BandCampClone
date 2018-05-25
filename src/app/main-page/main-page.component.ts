import { Component, OnInit } from '@angular/core';
import {BandsService} from '../services/bands.service/bands.service';
import cloneDeep from 'lodash/cloneDeep';

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

  //item ==> this.bandsService.bands[i]
  checkSearchCondition(searchStr, item) {
    return item['title'].toLowerCase()
        .indexOf(searchStr.toLowerCase()) !== -1 ||
      item['genre'].toLowerCase()
        .indexOf(searchStr.toLowerCase()) !== -1;
  }

  assignBandsFromServiceToThisComponent(searchStr = '') {
    this.bandsCardsData = [];

    // item ==> this.bandsService.bands[i]
    this.bandsService.bands.forEach( (item, i ) => {
      if ( this.checkSearchCondition(searchStr , item) ) {
        this.bandsCardsData.push( cloneDeep( item ) );
      }
    });
  }

  loadBandsInBandsService() {
    if (this.bandsCardsData.length === 0) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe(
            () => { this.assignBandsFromServiceToThisComponent(); },
            (err) => { console.log('error: ', err);
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent();
      }
    }
  }

}
