import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {BandCardComponent} from './band-card.component';
import {BandCardRoutingModule} from './band-card-routing.module';

@NgModule({
  declarations: [
    BandCardComponent
  ],
  exports: [BandCardComponent],
  imports: [
    CommonModule,
    BandCardRoutingModule
  ],
  providers: [],

})

export class BandCardModule {}
