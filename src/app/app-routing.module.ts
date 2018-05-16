import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {BandsCardsListPageComponent} from './bands-cards-list-page/bands-cards-list-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'bandsList', component: BandsCardsListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
