import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CallbackComponent} from './callback.component';
import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [
    CallbackComponent
  ],
  exports: [CallbackComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],

})

export class CallbackModule {}
