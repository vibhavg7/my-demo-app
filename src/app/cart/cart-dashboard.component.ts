import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, switchMap, tap } from 'rxjs/operators';
import { MerchantOrderProductListComponent } from '../merchant/merchant-detail/merchant-order-product-list.component';

@Component({
  selector: 'app-cart-dashboard',
  templateUrl: './cart-dashboard.component.html',
  styleUrls: ['./cart-dashboard.component.css']
})
export class CartDashboardComponent implements OnInit {

  filterBy: any = '';
  currentPage = 1;
  errorMessage = '';
  pageSize = 20;
  pageTitle = 'Cart Dashboard';
  cartTotalCount: any;
  customerCarts = [];
  searchCriteriaForm: FormGroup;
  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
    this.customerCarts = this.activatedRoute.snapshot.data['carts']['carts'];
    this.cartTotalCount = this.activatedRoute.snapshot.data['carts']["cart_total_count"];
    console.log(this.customerCarts);
    console.log(this.cartTotalCount);
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
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.cartService.fetchAllCartInformation(this.currentPage, this.pageSize, query, '')))
    )
      .subscribe((res: any) => {
        this.cartTotalCount = res.cart_total_count[0].total_carts_count;
        this.customerCarts = res.carts_info;
      });
  }

  currentPageFn(page) {
    this.cartService.fetchAllCartInformation(page, this.pageSize, this.filterBy, '')
      .subscribe((data: any) => {
        this.cartTotalCount = data.cart_total_count.cart_count;
        this.customerCarts = data.carts;
      });
  }

}
