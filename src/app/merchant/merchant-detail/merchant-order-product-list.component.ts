import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { MerchantService } from '../merchant.service';
import { CustomerService } from '../../customer/customer.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-merchant-order-product-list',
  templateUrl: './merchant-order-product-list.component.html',
  styleUrls: ['./merchant-order-product-list.component.css']
})
export class MerchantOrderProductListComponent implements OnInit {

  errorMessage: any;
  constructor(public activeModal: NgbActiveModal,
              private cartService: CartService,
              private customerService: CustomerService,
              private merchantService: MerchantService) { }

  title: any = '';
  // tslint:disable-next-line:variable-name
  order_id = '';
  // tslint:disable-next-line:variable-name
  cart_id = '';
  // tslint:disable-next-line:variable-name
  customer_order_id = '';
  orderProducts = [];
  ngOnInit() {
    if (this.cart_id !== '') {
      this.cartService.fetchCartProducts(this.cart_id).subscribe(
        (data: any) => {
          console.log(data);
          this.orderProducts = data.cartproducts;
        },
        (err) => {
          this.errorMessage = err;
        }
      );
    }
    if (this.order_id !== '') {
      console.log('inside it');
      this.merchantService.fetchOrderProducts(this.order_id).subscribe(
        (data: any) => {
          console.log(data);
          this.orderProducts = data.order_products_info;
        },
        (err) => {
          this.errorMessage = err;
        }
      );
    }
    if (this.customer_order_id !== '') {
      this.customerService.fetchOrderProducts(this.customer_order_id).subscribe(
        (data: any) => {
          console.log(data);
          this.orderProducts = data.order_products_info;
        },
        (err) => {
          this.errorMessage = err;
        }
      );
    }
  }

}
