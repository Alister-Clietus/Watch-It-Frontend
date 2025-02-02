import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallDectionRoutingModule } from './fall-dection-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FallDectionRoutingModule
  ]
})
export class FallDectionModule { }
