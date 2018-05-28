import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';
import { CallbackComponent } from './callback/callback.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { FooterComponent } from './footer/footer.component';

import { AuthService, LocalStorageService, BandsService } from './services';
import { BandNameGenreFilterPipe } from './pipes/band-name-genre.pipe';

import { HeaderModule } from './header/header.module';
import { BandPageModule } from './band-page/band-page.module';
import { BandCardModule } from './shared/band-card/band-card.module';
import { MainPageModule } from './main-page/main-page.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BandsCardsListPageComponent,
    BandNameGenreFilterPipe,
    CallbackComponent,
    AdminBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    BandPageModule,
    BandCardModule,
    MainPageModule
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
