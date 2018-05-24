import { Component, Input } from '@angular/core';
import { Album } from 'app/models';

@Component({
  selector: 'app-band-album',
  templateUrl: './band-album.component.html',
  styleUrls: ['./band-album.component.css']
})
export class BandAlbumComponent {
  @Input() album: Album;
}
