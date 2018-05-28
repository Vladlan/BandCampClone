import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const headerRoutes: Routes = [
  { path: 'bandsList',
    loadChildren: 'src/app/bands-cards-list-page/bands-cards-list-page.module#BandsCardsListPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})

export class MainPageRoutingModule {}
