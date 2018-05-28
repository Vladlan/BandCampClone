import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from 'app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [MainPageComponent]
})
export class HomeModule {}
