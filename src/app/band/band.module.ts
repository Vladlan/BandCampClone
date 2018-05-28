import { NgModule } from '@angular/core';

import { BandRoutingModule } from './band-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { BandNameGenreFilterPipe } from 'app/pipes';
import { BandAlbumComponent } from './band-album/band-album.component';
import { BandPageComponent } from './band-page/band-page.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';
import { BandsListItemComponent } from './bands-list-item/bands-list-item.component';

@NgModule({
  imports: [SharedModule, BandRoutingModule],
  declarations: [
    BandAlbumComponent,
    BandPageComponent,
    BandsCardsListPageComponent,
    BandsListItemComponent,
    BandNameGenreFilterPipe
  ],
  exports: []
})
export class BandModule {}
