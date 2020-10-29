import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionDashboardComponent } from './subscription-dashboard.component';
import { SubscriptionResolverService } from './subscription-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: SubscriptionDashboardComponent,
    resolve: { resolvedSubscriptions: SubscriptionResolverService }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
