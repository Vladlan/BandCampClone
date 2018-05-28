import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BandsCardsCarouselComponent } from 'app/band';
import { BandCardComponent } from '../band/band-card/band-card.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    SlickModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    BandsCardsCarouselComponent,
    BandCardComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SlickModule,
    BandsCardsCarouselComponent,
    BandCardComponent
  ]
})
export class SharedModule {}
