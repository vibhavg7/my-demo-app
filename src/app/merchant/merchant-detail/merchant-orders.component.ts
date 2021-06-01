import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MerchantService } from '../merchant.service';
import { ActivatedRoute } from '@angular/router';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MerchantOrderProductListComponent } from './merchant-order-product-list.component';
// import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';

@Component({
  selector: 'app-merchant-orders',
  templateUrl: './merchant-orders.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    .myCustomModalClass {
    }
  `]
})
export class MerchantOrdersComponent implements OnInit {

  storeId: number;
  pageTitle: any = 'Merchant Orders';
  storeordertotalcount: any;
  displaytype: any = 'AM';
  storeOrders: any = [];
  errorMessage = '';
  filterBy: any = '';
  currentPage = 1;
  pageSize = 20;

  searchCriteriaForm: FormGroup;
  constructor(private merchantService: MerchantService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.storeId = +this.activatedRoute.parent.params['_value']['storeId'];
    this.merchantService.fetchAllStoreOrders(this.storeId, this.currentPage, this.pageSize, '').subscribe((data: any) => {
      this.storeordertotalcount = data.store_order_count[0].store_orders_count;
      this.storeOrders = data.store_orders_info;
      console.log(data);
    });
    this.onChanges();
  }

  ViewOrderedProducts(orderid: any) {
    const modalRef: any = this.modalService.open(MerchantOrderProductListComponent,
                 { windowClass : 'myCustomModalClass',  size: 'lg',
                  backdropClass: 'light-blue-backdrop', centered: true, scrollable: true });
    modalRef.componentInstance.title = 'View Products';
    modalRef.componentInstance.order_id = orderid;
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.merchantService.fetchAllStoreOrders(this.storeId, this.currentPage,
        this.pageSize, query)))
    )
      .subscribe((res: any) => {
        this.storeordertotalcount = res.store_order_count[0].store_orders_count;
        this.storeOrders = res.store_orders_info;
      });
  }

  currentPageFn(page) {
    console.log(page);
    this.merchantService.fetchAllStoreOrders(this.storeId, page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.storeOrders = data.store_orders_info;
      });
  }

}
