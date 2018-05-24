import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-band-album',
  templateUrl: './band-album.component.html',
  styleUrls: ['./band-album.component.css']
})
export class BandAlbumComponent {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() genre: string;
  @Input() band: string;
}
