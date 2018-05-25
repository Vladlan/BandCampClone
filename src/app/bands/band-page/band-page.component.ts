import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BandsService} from '../../services/bands.service/bands.service';
import {BandNameGenreFilterPipe} from '../../pipes/band-name-genre.pipe';

export interface Album {
  id: string;
  title: string;
  imageUrl: string;
  band: string;
  genre: string;
}

export interface BandData {
  id: string;
  title: string;
  genre: string;
  launchYear: string;
  imageUrl: string;
  description: string;
  albums: Array<Album>;
}

@Component({
  selector: 'app-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.css']
})

export class BandPageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bandsService: BandsService,
    private bandNameGenreFilter: BandNameGenreFilterPipe
  ) {}

  currentBandData: BandData;
  currentBandTitle: string;

  ngOnInit() {
    this.loadBandsInBandsService();
  }

  getCurrentBandDataFromService() {
    this.currentBandTitle = this.route.snapshot.params['name'];

    if (this.bandsService.bands.length > 0 ) {
      this.currentBandData = this.bandNameGenreFilter.transform(
        this.bandsService.bands,
        this.currentBandTitle,
        'title',
        'title')[0];
    }
  }

  loadBandsInBandsService() {
    if (this.currentBandData === undefined) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe(
            () => { this.getCurrentBandDataFromService(); },
            (err) => { console.log('error: ', err); }
          );
      } else {
        this.getCurrentBandDataFromService();
      }
    } else {
      this.getCurrentBandDataFromService();
    }
  }

}
