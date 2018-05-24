import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, HeroComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {}
