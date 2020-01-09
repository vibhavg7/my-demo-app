import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponDashboardComponent } from './coupon-dashboard.component';
import { CouponEditComponent } from './coupon-edit.component';

const routes: Routes = [
    {
        path: '',
        component: CouponDashboardComponent
    },
    {
      path: ':couponId/edit',
      component: CouponEditComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CouponRoutingModule {

}
