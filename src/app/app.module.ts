import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService, LocalStorageService, BandsService } from './services';
import { BandNameGenreFilterPipe } from './pipes/band-name-genre.pipe';

import { HeaderModule } from './header/header.module';
import { BandCardModule } from './shared/band-card/band-card.module';
import { MainPageModule } from './main-page/main-page.module';
import {BandsCardsListPageModule} from './bands-cards-list-page/bands-cards-list-page.module';
import {CallbackModule} from './callback/callback.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    BandCardModule,
    MainPageModule,
    CallbackModule,
    BandsCardsListPageModule
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
