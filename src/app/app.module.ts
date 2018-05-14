import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopBandsListComponent } from './top-bands-list/top-bands-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TopBandsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
