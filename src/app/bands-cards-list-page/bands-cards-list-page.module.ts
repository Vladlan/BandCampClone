import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandsCardsListPageComponent} from './bands-cards-list-page.component';
import {BandCardModule} from '../shared/band-card/band-card.module';
import {BandNameGenreFilterPipe} from '../pipes/band-name-genre.pipe';
import {BandsCardsListPageRoutingModule} from './bands-cards-list-page-routing.module';

@NgModule({
  declarations: [
    BandsCardsListPageComponent,
    BandNameGenreFilterPipe
  ],
  imports: [
    CommonModule,
    BandCardModule,
    BandsCardsListPageRoutingModule
  ],
  exports: [BandsCardsListPageComponent],
  providers: [],

})
export class BandsCardsListPageModule {}
