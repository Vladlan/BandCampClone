import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminBarComponent } from './shared/admin-bar/admin-bar.component';

import { LocalStorageService, BandsService } from './services';
import { BandNameGenreFilterPipe } from './pipes/band-name-genre.pipe';

import { HeaderModule } from './shared/header/header.module';
import { BandCardModule } from './shared/band-card/band-card.module';
import { MainPageModule } from './main-page/main-page.module';
import { FooterComponent } from './shared/footer/footer.component';
import { CallbackModule } from './shared/callback/callback.module';
import { AuthService } from './services/auth.service/auth.service';



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
