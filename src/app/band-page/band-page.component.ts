import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private route: ActivatedRoute, private bandsService: BandsService) { }

  currentBandData: BandData;
  currentBandTitle: string;

  ngOnInit() {
    console.log('this.route', this.route.snapshot.params['name']);
    this.currentBandTitle = this.route.snapshot.params['name'];
    console.log(this.bandsService.bands);
    for (let i = 0; i < this.bandsService.bands.length; i++ ) {
      console.log('this.bandsService.bands[i][\'title\']', this.bandsService.bands[i]['title']);
      if (this.bandsService.bands[i]['title'].toLowerCase() === this.currentBandTitle.toLowerCase() ) {
        console.log('assigning');
        this.currentBandData = Object.assign({}, this.bandsService.bands[i] );
      }
    }
    console.log('this.currentBandTitle', this.currentBandTitle);
    console.log('this.currentBandData', this.currentBandData);
  }

}
