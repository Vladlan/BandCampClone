import { Component, Input } from '@angular/core';
import { Band } from 'app/models';

@Component({
  selector: 'app-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.css']
})
export class BandCardComponent {
  @Input() band: Band;
}
