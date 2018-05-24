import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { BandModule } from '../band/band.module';
import { SlickModule } from 'ngx-slick';
@NgModule({
  imports: [SharedModule, HomeRoutingModule, BandModule, SlickModule],
  declarations: [MainPageComponent]
})
export class HomeModule {}
