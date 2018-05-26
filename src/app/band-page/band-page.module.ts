import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandPageComponent} from './band-page.component';
import {BandAlbumComponent} from './band-album/band-album.component';
import {BandPageRoutingModule} from './band-page-routing.module';

@NgModule({
  declarations: [
    BandPageComponent,
    BandAlbumComponent
  ],
  imports: [
    CommonModule,
    BandPageRoutingModule
  ],
  providers: [],

})

export class BandPageModule {}
