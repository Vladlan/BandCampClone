import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BandPageComponent} from './band-page.component';

const bandPageRoutes: Routes = [
  { path: '', component: BandPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bandPageRoutes)],
  exports: [RouterModule]
})

export class BandPageRoutingModule {}
