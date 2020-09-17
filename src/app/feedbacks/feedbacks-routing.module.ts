import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackDashboardComponent } from './feedback-dashboard.component';
import { FeedbackResolverService } from './feedback-resolver.service';
import { FeedbackEditComponent } from './feedback-edit.component';
import { FeedbackDetailInfoComponent } from './feedback-detail-info.component';
import { FeedbackDetailResolverService } from './feedback-detail-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: FeedbackDashboardComponent,
    resolve: { resolvedFeedBacks: FeedbackResolverService }
  },
  {
    path: ':feedbackId/edit',
    component: FeedbackEditComponent
  },
  {
    path: 'feedbackinfo/:feedbackId',
    component: FeedbackDetailInfoComponent,
    resolve: { resolvedFeedBackDetail: FeedbackDetailResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbacksRoutingModule { }
