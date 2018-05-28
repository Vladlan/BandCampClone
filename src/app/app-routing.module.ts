import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {BandsCardsListPageComponent} from './bands-cards-list-page/bands-cards-list-page.component';
import {CallbackComponent} from './callback/callback.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'bandsList', component: BandsCardsListPageComponent },
  { path: 'band/:name', loadChildren: 'src/app/band-page/band-page.module#BandPageModule' },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
