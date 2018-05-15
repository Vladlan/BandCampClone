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

  onEnter(div: string) {
    console.log("mouse enter : " + div);
  }

  onLeave(div: string) {
    console.log("mouse leave :" + div);
  }
}
