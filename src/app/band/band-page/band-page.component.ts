import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.css']
})
export class BandPageComponent implements OnInit {
  bands: Array<string> = [];
  bandsLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bandsService: BandsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.bandsService.getBandById(id).subscribe(bands => {
      this.bands = bands;
      this.bandsLoaded = true;
      console.log(this.bands);
    });
  }

  getCurrentBandDataFromService() {
    this.currentBandTitle = this.route.snapshot.params['name'];
    for (let i = 0; i < this.bandsService.bands.length; i++) {
      if (
        this.bandsService.bands[i]['title'].toLowerCase() ===
        this.currentBandTitle.toLowerCase()
      ) {
        this.currentBandData = Object.assign({}, this.bandsService.bands[i]);
      }
    }
  }
}
