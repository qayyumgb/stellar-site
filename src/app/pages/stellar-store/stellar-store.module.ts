import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarStoreRoutingModule } from './stellar-store-routing.module';
import { StellarStoreComponent } from './stellar-store/stellar-store.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StellarStoreComponent
  ],
  imports: [
    CommonModule,
    StellarStoreRoutingModule,
    SharedModule
  ]
})
export class StellarStoreModule { }
