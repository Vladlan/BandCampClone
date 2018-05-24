import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { BandModule } from './band/band.module';
import { HomeModule } from './home/home.module';
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
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AuthModule,
    BandModule,
    AppRoutingModule
  ],
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
