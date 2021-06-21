import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponRoutingModule } from './coupon-routing,module';
import { CouponDashboardComponent } from './coupon-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CouponDataComponent } from './coupon-data.component';
import { CouponEditComponent } from './coupon-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    CouponDashboardComponent,
    CouponDataComponent,
    CouponEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CouponRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CouponModule { }
