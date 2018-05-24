import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  show: boolean;

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.localStorage.callToActionSubject.subscribe(item => {
      console.log(item);
      return (this.show = !!item);
    });
  }
}
