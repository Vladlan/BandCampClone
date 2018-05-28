import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page.component';

const mainPageRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'band/:name', loadChildren: 'src/app/band-page/band-page.module#BandPageModule' }
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRoutes)],
  exports: [RouterModule]
})

export class MainPageRoutingModule {}
