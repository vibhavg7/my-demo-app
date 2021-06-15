import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderInfoComponent } from './order-management/order-info.component';
import { OrderCustomerInfoComponent } from './order-management/order-customer-info.component';
import { OrderMerchantInfoComponent } from './order-management/order-merchant-info.component';
import { OrderProductInfoComponent } from './order-management/order-product-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrderDeliveryInfoComponent } from './order-management/order-delivery-info.component';
import { OrderInvoiceInfoComponent } from './order-management/order-invoice-info.component';
import { OrderDetailComponent } from './order-management/order-detail.component';
import { OrderDashboardComponent } from './order-dashboard.component';
import { OrderEditDetailComponent } from './order-edit/order-edit-detail.component';
import { EditOrderInfoComponent } from './order-edit/edit-order-info.component';
import { EditProductInfoComponent } from './order-edit/edit-product-info.component';
import { EditDeliveryInfoComponent } from './order-edit/edit-delivery-info.component';


@NgModule({
  declarations: [
    OrderInfoComponent,
    OrderCustomerInfoComponent,
    OrderDeliveryInfoComponent,
    OrderInvoiceInfoComponent,
    OrderMerchantInfoComponent,
    OrderProductInfoComponent,
    OrderDetailComponent,
    OrderDashboardComponent,
    OrderEditDetailComponent,
    EditOrderInfoComponent,
    EditProductInfoComponent,
    EditDeliveryInfoComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OrderModule { }
