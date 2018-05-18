import { Component, OnInit } from "@angular/core";

import { LocalStorage } from "../localstorage.service";
@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  show: boolean = this.globalService.callToAction;

  constructor(private globalService: LocalStorage) {}

  ngOnInit() {
    this.globalService.callToActionSubject.subscribe(
      item => (this.show = !!item)
    );
  }
}
