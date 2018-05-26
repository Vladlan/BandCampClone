import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {HeaderModule} from './header/header.module';
import { SlickModule } from 'ngx-slick';
import {BandPageModule} from './band-page/band-page.module';
import { BandCardComponent } from './band-card/band-card.component';
import { BandsCardsCarouselComponent } from './main-page/bands-cards-carousel/bands-cards-carousel.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';
import {CallbackComponent} from './callback/callback.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { CallToActionComponent} from './main-page/call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService } from './services/auth.service/auth.service';
import { LocalStorageService } from './services/localstorage.service/localstorage.service';
import { BandsService } from './services/bands.service/bands.service';
import { BandNameGenreFilterPipe } from './pipes/band-name-genre.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FooterComponent,
    BandCardComponent,
    BandsCardsCarouselComponent,
    BandsCardsListPageComponent,
    BandNameGenreFilterPipe,
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
    AppRoutingModule,
    HeaderModule,
    BandPageModule
  ],
  providers: [
    BandsService,
    AuthService,
    LocalStorageService,
    BandNameGenreFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
