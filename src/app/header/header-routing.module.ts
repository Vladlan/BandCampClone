import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BandsCardsListPageComponent} from '../bands-cards-list-page/bands-cards-list-page.component';

const headerRoutes: Routes = [
  { path: 'bandsList/', component: BandsCardsListPageComponent },
  { path: 'bandsList', component: BandsCardsListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})

export class HeaderRoutingModule {}
