import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from '../app-routing.module';
import {BandsCardsListPageComponent} from './bands-cards-list-page.component';
import {BandCardModule} from '../shared/band-card/band-card.module';
import {BandNameGenreFilterPipe} from '../pipes/band-name-genre.pipe';

@NgModule({
  declarations: [
    BandsCardsListPageComponent,
    BandNameGenreFilterPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BandCardModule
  ],
  exports: [BandsCardsListPageComponent],
  providers: [],

})
export class BandsCardsListPageModule {}
