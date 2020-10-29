import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { SubscriptionService } from './subscription.service';
@Component({
  selector: 'app-subscription-dashboard',
  templateUrl: './subscription-dashboard.component.html',
  styleUrls: ['./subscription-dashboard.component.css']
})
export class SubscriptionDashboardComponent implements OnInit {

  subscriptions: any;
  subscriptiontotalcount: any;
  filterBy: any = '';
  searchCriteriaForm: FormGroup;
  pageTitle: any = 'Subscription Dashboard';
  errorMessage: string;
  currentPage = 1;
  pageSize = 20;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService
  ) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit(): void {
    const resolvedData = this.activatedRoute.snapshot.data.resolvedSubscriptions;
    if (resolvedData instanceof ErrorTracker) {
      this.errorMessage = resolvedData.errorMessage;
    } else {
      this.subscriptiontotalcount = resolvedData.subscriptions_count[0].subscriptions_count;
      this.subscriptions = resolvedData.subscriptions_info;
      console.log(this.subscriptiontotalcount);
      console.log(this.subscriptions);
    }
  }

  onChanges() {
    // console.log('Hey');
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.subscriptionService.fetchAllSubscriptons(this.currentPage,
        this.pageSize, query)))
    )
      .subscribe((data: any) => {
        console.log(data);
        this.subscriptiontotalcount = data.subscriptions_count[0].subscriptions_count;
        this.subscriptions = data.subscriptions_info;
      });
  }

  currentPageFn(page) {
    console.log(page);
    this.subscriptionService.fetchAllSubscriptons(page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.subscriptiontotalcount = data.subscriptions_count[0].subscriptions_count;
        this.subscriptions = data.subscriptions_info;
      });
  }

}
