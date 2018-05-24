import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'bands',
    loadChildren: './band/band.module#BandsModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  { path: '**', redirectTo: '' }
];

// const appRoutes: Routes = [
//   { path: '', component: MainPageComponent },
//   { path: 'bandsList/', component: BandsCardsListPageComponent },
//   { path: 'bandsList', component: BandsCardsListPageComponent },
//   { path: 'band/:name', component: BandPageComponent },
//   { path: 'callback', component: CallbackComponent },
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
