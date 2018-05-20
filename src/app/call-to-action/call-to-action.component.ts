import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../localstorage.service";

@Component({
  selector: "app-hero",
  templateUrl: "./call-to-action.component.html",
  styleUrls: ["./call-to-action.component.css"]
})
export class CallToActionComponent implements OnInit {
  show: boolean;

  constructor(private globalService: LocalStorage) {}

  ngOnInit() {
    this.globalService.callToActionSubject.subscribe(
      item => {
        console.log(item);
        return this.show = !!item
      }
    );

    JSON.parse(localStorage.getItem("callToAction")) === null ? this.show = false : this.show = JSON.parse(localStorage.getItem("callToAction")).value;
  }
}
