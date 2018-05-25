import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BandsListItemComponent } from './bands/bands-list-item/bands-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BandCardComponent } from './bands/band-card/band-card.component';
import { BandsCardsCarouselComponent } from './bands/bands-cards-carousel/bands-cards-carousel.component';
import { SearchComponent } from './header/search/search.component';
import { BandsCardsListPageComponent } from './bands/bands-cards-list-page/bands-cards-list-page.component';
import {BandsService} from './services/bands.service/bands.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { BandPageComponent } from './bands/band-page/band-page.component';
import { BandAlbumComponent } from './bands/band-album/band-album.component';
import {BandNameGenreFilter} from './pipes/band-name-genre.pipe';
import {AuthService} from './services/auth.service/auth.service';
import {CallbackComponent} from './callback/callback.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { CallToActionComponent} from './call-to-action/call-to-action.component';
import { LocalStorageService } from './services/localstorage.service/localstorage.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BandsListItemComponent,
    HeaderComponent,
    FooterComponent,
    BandCardComponent,
    BandsCardsCarouselComponent,
    SearchComponent,
    BandsCardsListPageComponent,
    BandPageComponent,
    BandAlbumComponent,
    BandNameGenreFilter,
    CallbackComponent,
    AdminBarComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SlickModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BandsService, AuthService, LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
