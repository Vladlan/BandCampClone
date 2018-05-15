import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBandsListComponent } from './top-bands-list/top-bands-list.component';
import { BandsListItemComponent } from './bands-list-item/bands-list-item.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopBandsListComponent,
    BandsListItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
