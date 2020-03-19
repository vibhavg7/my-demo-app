import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantOrderProductListComponent } from '../merchant/merchant-detail/merchant-order-product-list.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  orderValueSet: boolean;
  searchCriteriaForm: FormGroup;
  constructor(
          private orderService: OrderService,
          private activatedRoute: ActivatedRoute,
          private formBuilder: FormBuilder,
          private modalService: NgbModal) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  pageTitle: any = 'Orders Dashboard';
  ordertotalcount: any;
  displaytype: any = 'AM';
  ordersinfo: any = [];
  filterBy: any = '';
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;

  ngOnInit() {
    this.onChanges();
    const resolvedData = this.activatedRoute.snapshot.data.resolvedOrders;

    if (resolvedData instanceof ErrorTracker) {
      this.errorMessage = resolvedData.errorMessage;
    } else {
      this.ordertotalcount = resolvedData.order_count.store_orders_count;
      this.ordersinfo = resolvedData.orders_info;
      console.log(this.ordertotalcount);
      console.log(this.ordersinfo);
    }
  }

  onChanges() {
    this.orderValueSet = false;
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
      console.log(data);
    }), distinctUntilChanged(), debounceTime(200),
      switchMap((query) => {
        if (!this.orderValueSet) {
          return this.orderService.fetchAllOrders(this.currentPage,this.pageSize, query);
        } else {
          this.orderValueSet = true;
          return of([]);
        }
      }))
      .subscribe((res: any) => { this.ordertotalcount = res.order_count.store_orders_count;
                                 this.ordersinfo = res.orders_info; console.log(this.ordersinfo); });
    // // console.log('Huiiii');
    // this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    //   console.log(data);
    // })
    // // , distinctUntilChanged(), debounceTime(200),
    // //   switchMap(query => (this.filterBy = query, this.orderService.fetchAllOrders(this.currentPage,
    // //     this.pageSize, query)))
    // // )
    // //   .subscribe((res: any) => {
    // //     this.ordertotalcount = res.order_count.store_orders_count;
    // //     this.ordersinfo = res.orders_info;}
    // );
  }

  currentPageFn(page) {
    this.orderService.fetchAllOrders(page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.ordertotalcount = data.order_count.store_orders_count;
        this.ordersinfo = data.orders_info;
      });
  }

  ViewOrderedProducts(orderid: any) {
    const modalRef: any = this.modalService.open(MerchantOrderProductListComponent);
    modalRef.componentInstance.title = 'View Products';
    modalRef.componentInstance.order_id = orderid;
  }


}
