import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.css']
})

export class BandCardComponent {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() description: string;
  @Input() genre: string;
  @Input() bandUrl: string;
}
