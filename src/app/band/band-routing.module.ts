import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandPageComponent } from './band-page/band-page.component';
import { BandsCardsListPageComponent } from './bands-cards-list-page/bands-cards-list-page.component';

const routes: Routes = [
  { path: '', component: BandsCardsListPageComponent },
  { path: ':name', component: BandPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandRoutingModule {}
