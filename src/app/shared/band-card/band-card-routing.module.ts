import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const mainPageRoutes: Routes = [
  { path: 'band/:name', loadChildren: 'src/app/band-page/band-page.module#BandPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(mainPageRoutes)],
  exports: [RouterModule]
})

export class BandCardRoutingModule {}
