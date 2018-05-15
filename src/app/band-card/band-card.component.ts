import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-band-card",
  templateUrl: "./band-card.component.html",
  styleUrls: ["./band-card.component.css"]
})
export class BandCardComponent {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() genre: string;
  @Input() bandUrl: string;

  onEnter(el: any) {
    el.target.childNodes[0].childNodes[1].style.display = "block";
  }

  onLeave(el: any) {
    el.target.childNodes[0].childNodes[1].style.display = "none";
  }
}
