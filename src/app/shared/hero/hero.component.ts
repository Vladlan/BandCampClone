import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  show: boolean;

  constructor(protected localStorage: LocalStorageService) {}

  ngOnInit() {
    this.localStorage.getItem('callToAction').subscribe(data => {
      this.show = data;
    });
  }
}
