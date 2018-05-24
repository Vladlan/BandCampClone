import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandPageComponent } from './band-page/band-page.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';

const routes: Routes = [
  { path: 'list', component: BandsCardsListPageComponent },
  { path: 'band/:name', component: BandPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule {}
