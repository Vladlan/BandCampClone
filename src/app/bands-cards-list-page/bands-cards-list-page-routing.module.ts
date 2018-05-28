import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BandsCardsListPageComponent} from './bands-cards-list-page.component';

const bandsCardsListPageRoutes: Routes = [
  {
    path: '',
    component: BandsCardsListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(bandsCardsListPageRoutes)],
  exports: [RouterModule]
})

export class BandsCardsListPageRoutingModule {}
