import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBandsListComponent } from './top-bands-list/top-bands-list.component';
import { BandsListItemComponent } from './bands-list-item/bands-list-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BandCardComponent } from './band-card/band-card.component';
import { BandsCardsCarouselComponent } from './bands-cards-carousel/bands-cards-carousel.component';
import { SearchComponent } from './header/search/search.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';
import {BandsService} from './bands.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { BandPageComponent } from './band-page/band-page.component';
import { BandAlbumComponent } from './band-album/band-album.component';
import {BandNameGenreFilter} from './band-name-genre.pipe';
import {AuthService} from "./auth/auth.service";
import {CallbackComponent} from "./callback/callback.component";
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { CallToActionComponent} from './call-to-action/call-to-action.component';
import { LocalStorage } from './localstorage.service';

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
  providers: [BandsService, AuthService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
