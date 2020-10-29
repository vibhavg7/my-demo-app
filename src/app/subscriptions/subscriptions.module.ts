import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionDashboardComponent } from './subscription-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionDataComponent } from './subscription-data.component';


@NgModule({
  declarations: [SubscriptionDashboardComponent, SubscriptionDataComponent],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SubscriptionsModule { }
