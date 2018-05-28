import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AdminBarComponent } from './admin';

import {
  LocalStorageService,
  AuthService,
  BandsService,
  ApiService
} from './services';

import { BandNameGenreFilterPipe } from './pipes';

@NgModule({
  declarations: [AppComponent, AdminBarComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [
    ApiService,
    BandsService,
    AuthService,
    LocalStorageService,
    BandNameGenreFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
