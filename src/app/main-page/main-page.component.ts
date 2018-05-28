import { Component, OnInit } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import {BandNameGenreFilterPipe} from '../pipes/band-name-genre.pipe';
import {BandsService} from '../services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  bandsCardsData = [];

  constructor(private bandsService: BandsService,
              private bandNameGenreFilter: BandNameGenreFilterPipe) {}

  ngOnInit() {
    this.loadBandsInBandsService();
  }

  assignBandsFromServiceToThisComponent(searchStr = '') {
    this.bandsCardsData = [];

    this.bandsCardsData = this.bandNameGenreFilter.transform(
      this.bandsService.bands,
      searchStr,
      'title',
      'genre');
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
