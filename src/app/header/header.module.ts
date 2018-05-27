import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {HeaderComponent} from './header.component';
import {SearchComponent} from './search/search.component';
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
exports: [ HeaderComponent ]
})

export class HeaderModule {}
