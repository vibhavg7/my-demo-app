import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDashboardComponent } from './delivery-dashboard.component';
import { DeliveryEditComponent } from './delivery-edit.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeliveryPersonInfoComponent } from './delivery-detail/delivery-person-info.component';
import { DeliveryPersonDocumentsComponent } from './delivery-detail/delivery-person-documents.component';
import { DeliveryPersonRealtimeOrdersComponent } from './delivery-detail/delivery-person-realtime-orders.component';
import { DeliveryPersonPastOrdersComponent } from './delivery-detail/delivery-person-past-orders.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DeliveryDashboardComponent, DeliveryEditComponent,
                  DeliveryDetailComponent, DeliveryPersonInfoComponent,
                  DeliveryPersonDocumentsComponent, DeliveryPersonRealtimeOrdersComponent, DeliveryPersonPastOrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }
