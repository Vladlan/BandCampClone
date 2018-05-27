import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandCardComponent} from "./band-card.component";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: [
    BandCardComponent
  ],
  exports: [BandCardComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],

})

export class BandCardModule {}
