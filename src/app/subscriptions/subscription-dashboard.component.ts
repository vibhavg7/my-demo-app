import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { SubscriptionService } from './subscription.service';
import { CustomerService } from '../customer/customer.service';
@Component({
  selector: 'app-subscription-dashboard',
  templateUrl: './subscription-dashboard.component.html',
  styleUrls: ['./subscription-dashboard.component.css']
})
export class SubscriptionDashboardComponent implements OnInit {

  disableButton = true;
  selectedAll: boolean;
  customerIds: any[];
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
    private customerService: CustomerService,
    private router: Router,
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

  selectAll() {
    this.selectedAll = !this.selectedAll;
    let totalSelected = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.subscriptions.length; i++) {
        this.subscriptions[i].selected = this.selectedAll;
        if (this.subscriptions[i].selected) {
          totalSelected++;
        }
    }
    this.disableButton = (totalSelected > 0 ? false : true);
    console.log(totalSelected);
    console.log(this.subscriptions);
  }

  checkIfAllSelected(customerId: any) {
    let totalSelected = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.subscriptions.length; i++) {
      // if (this.customers[i].customer_id === +customerId) {
      //   this.customers[i].selected = !this.customers[i].selected;
      // }
      if (this.subscriptions[i].selected) {
        totalSelected++;
      }
    }
    this.selectedAll = totalSelected === this.subscriptions.length;
    this.disableButton = (totalSelected > 0 ? false : true);
    console.log(this.subscriptions);
    console.log(totalSelected);
    return true;
  }

  sendNotification(notificationType) {
    const customerIds = [];
    this.subscriptions.forEach(subscription => {
      if (subscription.selected === true) {
        customerIds.push(subscription.customer_id);
      }
    });
    this.customerIds = customerIds;
    console.log(customerIds);
    this.customerService.customerNotificationIds = this.customerIds;
    // this.router.navigate([`subscriptions`]);
    this.router.navigate([`subscriptions/notification/add/${notificationType}`]);
    // alert ('Work under progress');
  }

}
