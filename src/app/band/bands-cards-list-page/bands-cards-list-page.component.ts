import { Component, OnInit } from '@angular/core';
import { BandsService } from 'app/services';
import { BandNameGenreFilterPipe } from 'app/pipes';
import { ActivatedRoute } from '@angular/router';
import { Band } from 'app/models';

@Component({
  selector: 'app-bands-cards-list-page',
  templateUrl: './bands-cards-list-page.component.html',
  styleUrls: ['./bands-cards-list-page.component.css']
})
export class BandsCardsListPageComponent implements OnInit {
  bands: Array<Band> = [];
  bandsLoaded = false;
  query: string;

  constructor(
    private route: ActivatedRoute,
    private bandsService: BandsService,
    private bandNameGenreFilter: BandNameGenreFilterPipe
  ) {}

  ngOnInit() {
    this.bandsService.getAll().subscribe(bands => {
      this.bands = bands;
      this.bandsLoaded = true;
      this.route.queryParams.subscribe(
        params =>
          !Object.keys(params).length
            ? this.bands
            : (this.bands = this.bandNameGenreFilter.transform(bands, params.q))
      );
    });
  }
}
