import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BandCardComponent } from './band-card/band-card.component';
import { BandsCardsCarouselComponent } from './bands-cards-carousel/bands-cards-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BandCardComponent,
    BandsCardsCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
