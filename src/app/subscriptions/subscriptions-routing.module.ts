import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionDashboardComponent } from './subscription-dashboard.component';
import { SubscriptionResolverService } from './subscription-resolver.service';
import { NotificationComponent } from '../shared/notification/notification.component';


const routes: Routes = [
  {
    path: '',
    component: SubscriptionDashboardComponent,
    resolve: { resolvedSubscriptions: SubscriptionResolverService }
  },
  {
    path: 'notification/add/:notificationType',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
