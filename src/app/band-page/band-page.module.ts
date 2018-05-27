import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandPageComponent} from './band-page.component';
import {BandAlbumComponent} from './band-album/band-album.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    BandPageComponent,
    BandAlbumComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],

})
export class BandPageModule {}
