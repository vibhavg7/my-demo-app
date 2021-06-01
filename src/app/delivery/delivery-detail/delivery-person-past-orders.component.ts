import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantOrderProductListComponent } from '../../merchant/merchant-detail/merchant-order-product-list.component';

@Component({
  selector: 'app-delivery-person-past-orders',
  templateUrl: './delivery-person-past-orders.component.html',
  styleUrls: ['./delivery-person-past-orders.component.css']
})
export class DeliveryPersonPastOrdersComponent implements OnInit {
  past_order_count: any;
  pastOrders: any;
  searchCriteriaForm: FormGroup;
  deliveryId: number;
  pageTitle: any = 'Past Orders';
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
    this.deliveryService.fetchAllDeliveryPersonPastOrders(this.deliveryId, this.currentPage, this.pageSize, '')
      .subscribe((data: any) => {
         if (+data.status === 200) {
          this.past_order_count = data.deliveryperson_pastorders_count[0].deliveryperson_pastorders_count;
          this.pastOrders = data.deliveryperson_pastorders_info;
          console.log(this.pastOrders);
          console.log(this.past_order_count);
         } else if (+data.status === 400) {

         }
      });
  }

  onChanges() {
    // console.log('Hey');
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.deliveryService.fetchAllDeliveryPersonPastOrders(this.deliveryId, this.currentPage,
        this.pageSize, query)))
    )
      .subscribe((data: any) => {
        this.past_order_count = data.deliveryperson_pastorders_count[0].deliveryperson_pastorders_count;
        this.pastOrders = data.deliveryperson_pastorders_info;
      });
  }

  ViewOrderedProducts(orderId: any) {
    const modalRef = this.modalService.open(MerchantOrderProductListComponent, { scrollable: true });
    modalRef.componentInstance['title'] = 'View Products';
    modalRef.componentInstance['order_id'] = orderId;
  }

  currentPageFn(page) {
    console.log(page);
    this.deliveryService.fetchAllDeliveryPersonPastOrders(this.deliveryId, page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.pastOrders = data.deliveryperson_pastorders_info;
      });
  }

}
