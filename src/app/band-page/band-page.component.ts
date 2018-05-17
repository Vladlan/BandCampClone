import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BandsService} from '../bands.service';

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
    private bandsService: BandsService
  ) {}

  currentBandData: BandData;
  currentBandTitle: string;

  ngOnInit() {
    this.loadBandsInBandsService();
  }

  getCurrentBandDataFromService() {
    this.currentBandTitle = this.route.snapshot.params['name'];
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      if (this.bandsService.bands[i]['title'].toLowerCase() === this.currentBandTitle.toLowerCase()) {
        this.currentBandData = Object.assign({}, this.bandsService.bands[i]);
      }
    }
  }

  loadBandsInBandsService() {
    if (this.currentBandData === undefined) {
      if (this.bandsService.bands.length === 0) {
        this.bandsService.assignBandsToService()
          .subscribe((data) => {
              this.getCurrentBandDataFromService();
            },
            (err) => {
              console.log('error: ', err);
            },
            () => {
              console.log('completed in ngOnInit of BandPageComponent');
            }
          );
      } else {
        this.getCurrentBandDataFromService();
      }
    } else {
      this.getCurrentBandDataFromService();
    }
  }

}
