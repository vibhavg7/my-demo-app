import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from '../shared/notification/notification.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  customerIds: any = [];
  pageTitle: any = 'Customers Dashboard';
  total_customer_count: any;
  displaytype: any = 'AM';
  customers: any = [];
  disableButton = true;
  filterBy: any = '';
  currentPage = 1;
  errorMessage = '';
  pageSize = 20;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  selectedAll: any;
  constructor(private _customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    this.customers = this.activatedRoute.snapshot.data['customers']["customers"];
    this.total_customer_count = this.activatedRoute.snapshot.data["customers"]['customer_total_count'];
    this.onChanges();
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this._customerService.fetchAllCustomers(this.currentPage, this.pageSize, query)))
    )
      .subscribe(res => {
      this.total_customer_count = res['customer_total_count']['customer_count'];
        this.customers = res['customers'];
      });
  }

  currentPageFn(page) {
    console.log(page);
    this._customerService.fetchAllCustomers(page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.total_customer_count = data['customer_total_count']['customer_count'];
        this.customers = data['customers'];
      });
  }

  checkIfAllSelected(customerId: any) {
    let totalSelected = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customers.length; i++) {
      // if (this.customers[i].customer_id === +customerId) {
      //   this.customers[i].selected = !this.customers[i].selected;
      // }
      if (this.customers[i].selected) {
        totalSelected++;
      }
    }
    this.selectedAll = totalSelected === this.customers.length;
    this.disableButton = (totalSelected > 0 ? false : true);
    // console.log(this.customers);
    // console.log(totalSelected);
    return true;
  }

  selectAll() {
    this.selectedAll = !this.selectedAll;
    let totalSelected = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customers.length; i++) {
        this.customers[i].selected = this.selectedAll;
        if (this.customers[i].selected) {
          totalSelected++;
        }
    }
    this.disableButton = (totalSelected > 0 ? false : true);
    // console.log(totalSelected);
    // console.log(this.customers);
  }

  sendNotification(notificationType) {
    const customerIds = [];
    this.customers.forEach(customer => {
      if (customer.selected === true) {
        customerIds.push(customer.customer_id);
      }
    });
    this.customerIds = customerIds;
    console.log(customerIds);
    this._customerService.customerNotificationIds = this.customerIds;
    // const modalRef = this.modalService.open(NotificationComponent);
    // modalRef.componentInstance['title']= 'Send Notification';
    // modalRef.componentInstance['notificationType']= notificationType;
    this.router.navigate([`customer/notification/add/${notificationType}`]);
    // alert ('Work under progress');
  }

}
