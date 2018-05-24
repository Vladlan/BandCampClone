import { NgModule } from '@angular/core';

import { BandRoutingModule } from './band-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { SlickModule } from 'ngx-slick';

import { BandNameGenreFilterPipe } from 'app/pipes';
import { BandAlbumComponent } from './band-album/band-album.component';
import { BandCardComponent } from './band-card/band-card.component';
import { BandPageComponent } from './band-page/band-page.component';
import { BandsCardsCarouselComponent } from './bands-cards-carousel/bands-cards-carousel.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';
import { BandsListItemComponent } from './bands-list-item/bands-list-item.component';

@NgModule({
  imports: [SharedModule, BandRoutingModule, SlickModule],
  declarations: [
    BandAlbumComponent,
    BandCardComponent,
    BandPageComponent,
    BandsCardsCarouselComponent,
    BandsCardsListPageComponent,
    BandsListItemComponent,
    BandNameGenreFilterPipe
  ],
  exports: [BandsCardsCarouselComponent]
})
export class BandModule {}
