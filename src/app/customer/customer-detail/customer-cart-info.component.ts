import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';
import { MerchantOrderProductListComponent } from '../../merchant/merchant-detail/merchant-order-product-list.component';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-customer-cart-info',
  templateUrl: './customer-cart-info.component.html',
  styleUrls: ['./customer-cart-info.component.css']
})
export class CustomerCartInfoComponent implements OnInit {

  cartTotalCount: any;
  customerCarts: any;
  filterBy = '';
  customerId: number;
  searchCriteriaForm: FormGroup;
  currentPage = 1;
  errorMessage: any;
  pageSize = 20;
  pageTitle: any;
  refreshData = true;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private cartService: CartService, private modalService: NgbModal) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.customerId = +this.activatedRoute.parent.params['_value']['customerId'];
    this.cartService.fetchAllCartInformation(this.currentPage, this.pageSize, this.filterBy, this.customerId)
      .subscribe((data: any) => {
        console.log(data);
        this.cartTotalCount = data.cart_total_count[0].customer_cart_count;
        this.customerCarts = data.carts_info;
      });
    this.onChanges();
  }

  ViewCartProducts(cartId: any) {
    const modalRef: any = this.modalService.open(MerchantOrderProductListComponent,
      {
        windowClass: 'myCustomModalClass', size: 'lg',
        backdropClass: 'light-blue-backdrop', centered: true, scrollable: true
      });
    modalRef.componentInstance.title = 'View Products';
    modalRef.componentInstance.cart_id = cartId;
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap((data1: any) => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.cartService.fetchAllCartInformation(this.currentPage,
        this.pageSize, query, this.customerId)))
    )
      .subscribe((data: any) => {
        this.cartTotalCount = data.cart_total_count[0].customer_cart_count;
        this.customerCarts = data.carts_info;
      });
  }

  currentPageFn(page) {
    this.cartService.fetchAllCartInformation(page, this.pageSize, this.filterBy, this.customerId)
      .subscribe((data: any) => {
        this.customerCarts = data.carts_info;
      });
  }

}
