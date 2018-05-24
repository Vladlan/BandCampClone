import { Component, OnInit } from '@angular/core';
import { BandsService } from 'app/services';
import { Band } from 'app/models';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  bands: Array<Band> = [];
  bandsLoaded = false;

  constructor(private bandsService: BandsService) {}

  ngOnInit() {
    this.bandsService.getAll().subscribe(bands => {
      this.bands = bands;
      this.bandsLoaded = true;
      console.log(this.bands);
    });
  }
}
