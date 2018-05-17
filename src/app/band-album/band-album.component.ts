import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-band-album',
  templateUrl: './band-album.component.html',
  styleUrls: ['./band-album.component.css']
})
export class BandAlbumComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() genre: string;
  @Input() band: string;

  constructor() { }

  ngOnInit() {
  }

}
