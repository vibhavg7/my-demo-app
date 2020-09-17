import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';

@Component({
  selector: 'app-feedback-detail-info',
  templateUrl: './feedback-detail-info.component.html',
  styleUrls: ['./feedback-detail-info.component.css']
})
export class FeedbackDetailInfoComponent implements OnInit {

  feedbackId: string;
  feedBackMessagestotalcount: any;
  customerFeedbackMessages: any;
  pageTitle: any = 'Customer Feedback Messages';
  customerInfo: any;
  errorMessage: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.feedbackId = this.activatedRoute.snapshot.paramMap.get('feedbackId');
    // console.log(this.feedbackId);
    const resolvedFeedBackDetail = this.activatedRoute.snapshot.data.resolvedFeedBackDetail;
    if (resolvedFeedBackDetail instanceof ErrorTracker) {
      this.errorMessage = resolvedFeedBackDetail.errorMessage;
    } else {
      this.customerFeedbackMessages = resolvedFeedBackDetail.customer_feedback_messages;
      this.customerInfo = resolvedFeedBackDetail.customer_feedback_info[0];
      this.feedBackMessagestotalcount = resolvedFeedBackDetail.customer_feedback_messages_count[0].customer_feedbacks_count;
      console.log(this.customerFeedbackMessages);
      console.log(this.feedBackMessagestotalcount);
      console.log(this.customerInfo);
    }
  }

}
