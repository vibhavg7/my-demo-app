import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDashboardComponent } from './delivery-dashboard.component';
import { DeliveryResolverService } from './delivery-resolver.service';
import { DeliveryEditComponent } from './delivery-edit.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeliveryPersonInfoComponent } from './delivery-detail/delivery-person-info.component';
import { DeliveryPersonDocumentsComponent } from './delivery-detail/delivery-person-documents.component';
import { DeliveryPersonRealtimeOrdersComponent } from './delivery-detail/delivery-person-realtime-orders.component';
import { DeliveryPersonPastOrdersComponent } from './delivery-detail/delivery-person-past-orders.component';


const routes: Routes = [
  {
    path: '',
    component: DeliveryDashboardComponent,
    resolve: { deliverypersons: DeliveryResolverService }
  },
  {
    path: ':deliveryId',
    component: DeliveryDetailComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: DeliveryPersonInfoComponent },
      { path: 'documents', component: DeliveryPersonDocumentsComponent },
      { path: 'realtimeorders', component: DeliveryPersonRealtimeOrdersComponent },
      { path: 'pastorders', component: DeliveryPersonPastOrdersComponent }
    ]
  },
  {
    path: ':deliveryId/edit',
    component: DeliveryEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DeliveryRoutingModule { }
