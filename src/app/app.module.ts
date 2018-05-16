import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBandsListComponent } from './top-bands-list/top-bands-list.component';
import { BandsListItemComponent } from './bands-list-item/bands-list-item.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BandCardComponent } from './band-card/band-card.component';
import { BandsCardsCarouselComponent } from './bands-cards-carousel/bands-cards-carousel.component';
import { BandPageComponent } from './band-page/band-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopBandsListComponent,
    BandsListItemComponent,
    HeaderComponent,
    FooterComponent,
    BandCardComponent,
    BandsCardsCarouselComponent,
    BandPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
