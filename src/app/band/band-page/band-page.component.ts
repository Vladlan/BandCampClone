import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BandsService } from 'app/services';
import { Band } from 'app/models';

@Component({
  selector: 'app-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.css']
})
export class BandPageComponent implements OnInit {
  band: Band;
  bandLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bandsService: BandsService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.params['name'].toLowerCase();
    console.log(name);
    this.bandsService.getBandByName(name).subscribe(band => {
      this.band = band;
      this.bandLoaded = true;
    });
  }
}
