import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';
import { FeedbackService } from './feedback.service';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feedback-dashboard',
  templateUrl: './feedback-dashboard.component.html',
  styleUrls: ['./feedback-dashboard.component.css']
})
export class FeedbackDashboardComponent implements OnInit {

  feedBacks: any;
  feedBacktotalcount: any;
  searchCriteriaForm: FormGroup;
  pageTitle: any = 'Feedbacks Dashboard';
  filterBy: any = '';
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  constructor(private formBuilder: FormBuilder,
              private feedBackService: FeedbackService,
              private activatedRoute: ActivatedRoute) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    const resolvedData = this.activatedRoute.snapshot.data.resolvedFeedBacks;
    if (resolvedData instanceof ErrorTracker) {
      this.errorMessage = resolvedData.errorMessage;
    } else {
      this.feedBacktotalcount = resolvedData.customer_feedback_count[0].customer_feedback_count;
      this.feedBacks = resolvedData.customer_feedback_info;
      // console.log(this.feedBacktotalcount);
      // console.log(this.feedBacks);
    }
  }

  onChanges() {
    // console.log('Hey');
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.feedBackService.fetchAllFeedBacks(this.currentPage,
        this.pageSize, query)))
    )
      .subscribe((data: any) => {
        console.log(data);
        this.feedBacktotalcount = data.customer_feedback_count[0].customer_feedback_count;
        this.feedBacks = data.customer_feedback_info;
      });
  }

  currentPageFn(page) {
    this.feedBackService.fetchAllFeedBacks(page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.feedBacktotalcount = data.customer_feedback_count.customer_feedback_count;
        this.feedBacks = data.customer_feedback_info;
      });
  }

}
