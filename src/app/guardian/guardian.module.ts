import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Import this module

import { GuardianRoutingModule } from './guardian-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GuardianRoutingModule,
    FormsModule
  ]
})
export class GuardianModule { }
