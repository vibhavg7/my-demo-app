import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantOrderProductListComponent } from '../../merchant/merchant-detail/merchant-order-product-list.component';
@Component({
  selector: 'app-delivery-person-realtime-orders',
  templateUrl: './delivery-person-realtime-orders.component.html',
  styleUrls: ['./delivery-person-realtime-orders.component.css']
})
export class DeliveryPersonRealtimeOrdersComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  ongoingOrders: any;
  ongoing_order_count: any;
  deliveryId: number;
  pageTitle: any = 'Ongoing Orders';
  filterBy: any = '';
  errorMessage: any = '';
  currentPage = 1;
  pageSize = 20;
  constructor(private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private deliveryService: DeliveryService,
              private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    this.deliveryId = +this.activatedRoute.parent.params['_value']['deliveryId'];
    this.deliveryService.fetchAllDeliveryPersonRunningOrders(this.deliveryId, this.currentPage, this.pageSize, '')
      .subscribe((data: any) => {
         if (+data.status === 200) {
          this.ongoing_order_count = data.ongoing_order_count[0].ongoing_orders_count;
          this.ongoingOrders = data.ongoing_orders_info;
          console.log(this.ongoingOrders);
          console.log(this.ongoing_order_count);
         } else if (+data.status === 400) {

         }
      });
  }

  onChanges() {
    // console.log('Hey');
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.deliveryService.fetchAllDeliveryPersonRunningOrders(this.deliveryId, this.currentPage,
        this.pageSize, query)))
    )
      .subscribe((data: any) => {
        this.ongoing_order_count = data.ongoing_orders_count[0].ongoing_order_count;
        this.ongoingOrders = data.ongoing_orders_info;
      });
  }

  ViewOrderedProducts(orderId: any) {
    const modalRef = this.modalService.open(MerchantOrderProductListComponent);
    modalRef.componentInstance['title'] = 'View Products';
    modalRef.componentInstance['order_id'] = orderId;
  }

  currentPageFn(page) {
    console.log(page);
    this.deliveryService.fetchAllDeliveryPersonRunningOrders(this.deliveryId, page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.ongoingOrders = data.ongoing_orders_info;
      });
  }

}
