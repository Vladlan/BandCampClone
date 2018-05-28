import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {MainPageComponent} from './main-page.component';
import {CallToActionComponent} from './call-to-action/call-to-action.component';
import {BandsCardsCarouselComponent} from './bands-cards-carousel/bands-cards-carousel.component';
import {SlickModule} from 'ngx-slick';
import {BandCardModule} from '../shared/band-card/band-card.module';


@NgModule({
  declarations: [
    MainPageComponent,
    CallToActionComponent,
    BandsCardsCarouselComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    SlickModule.forRoot(),
    BandCardModule,
    AppRoutingModule
  ],
  providers: [],

})

export class MainPageModule {}
