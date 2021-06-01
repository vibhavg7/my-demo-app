import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth.guard';
import { LoginComponent } from './user/login.component';
import { AppRoutes } from './model/routing-enums/app-routes.enum.enum';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppPreloadingStrategy } from './model/app-preloading-strategy';
import { UnauthorizedComponent } from './shared/unauthorized/unauthorized.component';

const routes: any = [
  { path: AppRoutes.Welcome, component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: AppRoutes.Login, component: LoginComponent},
    {
      path: AppRoutes.Products,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./products/product.module').then(m => m.ProductModule)
    },
    {
      path: AppRoutes.User,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./user/user.module').then(m => m.UserModule)
    },
    {
      path: AppRoutes.Category,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./category/category.module').then(m => m.CategoryModule)
    },
    {
      path: AppRoutes.Merchant,
      canActivate: [AuthGuard],
      data: { preload: true, delay: false },
      loadChildren: () =>
        import('./merchant/merchant.module').then(m => m.MerchantModule)
    },
    {
      path: AppRoutes.Subscriptions,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
    },
    {
      path: AppRoutes.Customer,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
      path: AppRoutes.Cart,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./cart/cart.module').then(m => m.CartModule)
    },
    {
      path: AppRoutes.Order,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./order/order.module').then(m => m.OrderModule)
    },
    {
      path: AppRoutes.Coupon,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./coupon/coupon.module').then(m => m.CouponModule)
    },
    {
      path: AppRoutes.Employee,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./employee/employee.module').then(m => m.EmployeeModule)
    },
    {
      path: AppRoutes.Banner,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./banner/banner.module').then(m => m.BannerModule)
    },
    {
      path: AppRoutes.Invoice,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
      path: AppRoutes.Servicableareas,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./servicable-areas/servicable-areas.module').then(m => m.ServicableAreasModule)
    },
    {
      path: AppRoutes.Delivery,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./delivery/delivery.module').then(m => m.DeliveryModule)
    },
    { path: 'unauthorized', component: UnauthorizedComponent, data: { message: 'You are not authorized to access this page!' } },
    { path: AppRoutes.NotFound, component: ErrorPageComponent, data: { message: 'Page not found!' } },
    {
      path: AppRoutes.Feedbacks,
      canActivate: [AuthGuard],
      // data: { preload: true, delay: false },
      loadChildren: () =>
        import('./feedbacks/feedbacks.module').then(m => m.FeedbacksModule)
    },
    {path: AppRoutes.Default, redirectTo: AppRoutes.Welcome, pathMatch: 'full'},
    {path: '**', redirectTo: AppRoutes.NotFound}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppPreloadingStrategy })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
