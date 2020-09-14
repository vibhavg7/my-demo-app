import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackDashboardComponent } from './feedback-dashboard.component';
import { FeedbackEditComponent } from './feedback-edit.component';
import { FeedbackDataComponent } from './feedback-data.component';


@NgModule({
  declarations: [FeedbackDashboardComponent, FeedbackEditComponent, FeedbackDataComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedbacksRoutingModule,
    SharedModule
  ]
})
export class FeedbacksModule { }
