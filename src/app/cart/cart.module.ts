import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDashboardComponent } from './cart-dashboard.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartProductInfoComponent } from './cart-detail/cart-product-info.component';
import { CartCustomerInfoComponent } from './cart-detail/cart-customer-info.component';
import { CartMerchantInfoComponent } from './cart-detail/cart-merchant-info.component';
import { CartDeliveryInfoComponent } from './cart-detail/cart-delivery-info.component';
import { CartDetailInfoComponent } from './cart-detail/cart-detail-info.component';



@NgModule({
  declarations: [CartDashboardComponent, CartDetailComponent, CartProductInfoComponent,
    CartCustomerInfoComponent, CartMerchantInfoComponent, CartDeliveryInfoComponent, CartDetailInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
