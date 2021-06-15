import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderProductInfoComponent } from './order-management/order-product-info.component';
import { OrderCustomerInfoComponent } from './order-management/order-customer-info.component';
import { OrderMerchantInfoComponent } from './order-management/order-merchant-info.component';
import { OrderDeliveryInfoComponent } from './order-management/order-delivery-info.component';
import { OrderInvoiceInfoComponent } from './order-management/order-invoice-info.component';
import { OrderProductsResolver } from './order-products.resolver';
import { OrderCustomerInfoResolver } from './order-customerinfo.resolver';
import { OrderMerchantInfoResolver } from './order-merchantinfo.resolver';
import { OrderInvoiceInfoResolver } from './order-invoiceinfo.resolver';
import { OrderDetailComponent } from './order-management/order-detail.component';
import { OrderDashboardComponent } from './order-dashboard.component';
import { OrderResolverService } from './order-resolver.service';
import { OrderEditDetailComponent } from './order-edit/order-edit-detail.component';
import { EditOrderInfoComponent } from './order-edit/edit-order-info.component';
import { EditProductInfoComponent } from './order-edit/edit-product-info.component';
import { EditDeliveryInfoComponent } from './order-edit/edit-delivery-info.component';
import { OrderStatusResolver } from './order-status.resolver';
import { ActiveDeliveryPersonResolver } from './active-delivery-person.resolver';

const routes: Routes = [
  {
    path: '',
    component: OrderDashboardComponent,
    resolve: { resolvedOrders: OrderResolverService }
  },
  {
    path: ':orderId',
    component: OrderDetailComponent,
    children: [
      {
        path: 'productsinfo',
        component: OrderProductInfoComponent,
        resolve: { resolvedProducts: OrderProductsResolver }
      },
      {
        path: 'customerinfo',
        component: OrderCustomerInfoComponent,
        resolve: { resolvedCustomer: OrderCustomerInfoResolver }
      },
      {
        path: 'merchantinfo',
        component: OrderMerchantInfoComponent,
        resolve: { resolvedMerchant: OrderMerchantInfoResolver }
      },
      { path: 'deliveryinfo', component: OrderDeliveryInfoComponent },
      {
        path: 'invoiceinfo',
        component: OrderInvoiceInfoComponent,
        resolve: { resolvedInvoice: OrderInvoiceInfoResolver }
      }
    ]
  },
  {
    path: ':orderId/edit',
    component: OrderEditDetailComponent,
    children: [
      {
        path: 'editorderinfo',
        component: EditOrderInfoComponent,
        resolve:
        {
          resolvedInvoice: OrderInvoiceInfoResolver,
          resolvedorderStatusTypes: OrderStatusResolver,
          resolvedActiveDP: ActiveDeliveryPersonResolver
        }
      },
      {
        path: 'editproductsinfo',
        component: EditProductInfoComponent,
        resolve: { resolvedProducts: OrderProductsResolver }
      },
      {
        path: 'editdeliveryinfo',
        component: EditDeliveryInfoComponent
      }
    ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule {

}
