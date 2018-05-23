import {Component, OnInit} from '@angular/core';
import {BandsService} from '../services/bands.service';
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
      console.log(params);
      setTimeout(
        () => {
          params.searchQuery === undefined ? this.searchStr = '' : this.searchStr = params.searchQuery;
          this.assignBandsFromServiceToThisComponent(this.searchStr);
        }, 100);
    });

    this.loadBandsInBandsService();
  }


  assignBandsFromServiceToThisComponent(searchStr = '') {
    this.bandsCardsData = [];
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      if ( this.bandsService.bands[i]['title'].toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1 ||
        this.bandsService.bands[i]['genre'].toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1
      ) {
        this.bandsCardsData.push(
          Object.assign({}, this.bandsService.bands[i])
        );
      }
    }
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
