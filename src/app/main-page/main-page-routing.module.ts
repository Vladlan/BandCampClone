import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page.component';
import {BandsCardsListPageComponent} from '../bands-cards-list-page/bands-cards-list-page.component';

const mainPageRoutes: Routes = [
  { path: '', component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRoutes)],
  exports: [RouterModule]
})

export class MainPageRoutingModule {}
