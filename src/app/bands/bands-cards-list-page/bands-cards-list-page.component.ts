import {Component, OnInit} from '@angular/core';
import {BandsService} from '../../services/bands.service/bands.service';
import {ActivatedRoute} from '@angular/router';
import cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {

  bandsCardsData = [];
  searchStr: string;

  constructor(private route: ActivatedRoute,
              private bandsService: BandsService) {
  }

  ngOnInit() {
    this.searchStr = this.route.snapshot.queryParams['searchQuery'];

    this.route.queryParams.subscribe((params) => {
      setTimeout(
        () => {
          params.searchQuery === undefined ? this.searchStr = '' : this.searchStr = params.searchQuery;
          this.assignBandsFromServiceToThisComponent(this.searchStr);
        }, 100);
    });

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
          .subscribe(() => {
              this.assignBandsFromServiceToThisComponent(this.searchStr);
            },
            (err) => {
              console.log('error: ', err);
            }
          );
      } else {
        this.assignBandsFromServiceToThisComponent(this.searchStr);
      }


    }
  }

}
