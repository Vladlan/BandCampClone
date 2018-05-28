import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BandNameGenreFilterPipe} from '../pipes/band-name-genre.pipe';
import {BandsService} from '../services';


@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {

  bandsCardsData = [];
  searchStr: string;

  constructor(private route: ActivatedRoute,
              private bandsService: BandsService,
              private bandNameGenreFilter: BandNameGenreFilterPipe
              ) {
  }

  ngOnInit() {
    this.searchStr = this.route.snapshot.queryParams['searchQuery'];

    this.route.queryParams.subscribe((params) => {
      params.searchQuery === undefined ? this.searchStr = '' : this.searchStr = params.searchQuery;
          this.assignBandsFromServiceToThisComponent(this.searchStr);
    });

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
