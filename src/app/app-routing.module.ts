import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth.guard';

const routes: any = [
  { path: 'welcome', component: WelcomeComponent},
    {
      path: 'products',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./products/product.module').then(m => m.ProductModule)
    },
    {
      path: 'category',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./category/category.module').then(m => m.CategoryModule)
    },
    {
      path: 'merchant',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./merchant/merchant.module').then(m => m.MerchantModule)
    },
    {
      path: 'customer',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: 'order',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./order/order.module').then(m => m.OrderModule)
    },
    {
      path: 'coupon',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./coupon/coupon.module').then(m => m.CouponModule)
    },
    {
      path: 'employee',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    {
      path: 'banner',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./banner/banner.module').then(m => m.BannerModule)
    },
    {
      path: 'invoice',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
      path: 'servicableareas',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./servicable-areas/servicable-areas.module').then(m => m.ServicableAreasModule)
    },
    {
      path: 'delivery',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
        import('./delivery/delivery.module').then(m => m.DeliveryModule)
    },
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
