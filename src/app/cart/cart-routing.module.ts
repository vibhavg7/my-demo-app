import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartDashboardComponent } from './cart-dashboard.component';
import { CartResolverService } from './cart-resolver.service';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartProductInfoComponent } from './cart-detail/cart-product-info.component';
import { CartCustomerInfoComponent } from './cart-detail/cart-customer-info.component';
import { CartMerchantInfoComponent } from './cart-detail/cart-merchant-info.component';
import { CartDeliveryInfoComponent } from './cart-detail/cart-delivery-info.component';
import { CartDetailInfoComponent } from './cart-detail/cart-detail-info.component';
import { CartProductsResolver } from './cart-products-resolver';
import { CartCustomerResolver } from './cart-customer-resolver';
import { CartMerchantResolver } from './cart-merchant-resolver';

const routes: Routes = [
  {
    path: '',
    component: CartDashboardComponent,
    resolve: { carts: CartResolverService }
  },
  {
    path: ':cartId',
    component: CartDetailComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      {
        path: 'info',
        component: CartDetailInfoComponent,
        resolve: { resolvedCustomer: CartCustomerResolver }
      },
      {
        path: 'productsinfo',
        component: CartProductInfoComponent,
        resolve: { resolvedProducts: CartProductsResolver }
      },
      {
        path: 'customerinfo',
        component: CartCustomerInfoComponent,
        resolve: { resolvedCustomer: CartCustomerResolver }
      },
      {
        path: 'merchantinfo',
        component: CartMerchantInfoComponent,
        resolve: { resolvedMerchant: CartMerchantResolver }
      },
      { path: 'deliveryinfo', component: CartDeliveryInfoComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
