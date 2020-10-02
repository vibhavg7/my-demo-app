import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../feedbacks/feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {

  customerId: number;
  filterBy: any = '';
  currentPage = 1;
  errorMessage = '';
  pageSize = 20;
  pageTitle: any = 'Customer Feedback Report';
  customerfeedbackscount: any;
  customerfeedbacks: any = [];
  constructor(private feedBackService: FeedbackService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerId = +this.activatedRoute.parent.params['_value']['customerId'];
    // console.log(this.customerId);
    this.feedBackService.fetchAllFeedBacks(this.currentPage, this.pageSize, this.filterBy, this.customerId).subscribe((data: any) => {
      // console.log(data);
      this.customerfeedbackscount = data.customer_feedback_count[0].customer_feedback_count;
      this.customerfeedbacks = data.customer_feedback_info;
    });
  }

  currentPageFn(page) {
    this.feedBackService.fetchAllFeedBacks(page, this.pageSize, this.filterBy, this.customerId)
      .subscribe((data) => {
        this.customerfeedbackscount = data.customer_feedback_count[0].customer_feedback_count;
        this.customerfeedbacks = data.customer_feedback_info;
      });
  }

}
