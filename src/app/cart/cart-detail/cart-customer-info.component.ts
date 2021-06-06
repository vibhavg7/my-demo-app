import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-customer-info',
  templateUrl: './cart-customer-info.component.html',
  styleUrls: ['./cart-customer-info.component.css']
})
export class CartCustomerInfoComponent implements OnInit {

  errorMessage: any;
  customerData: any;
  cartId: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartId = this.activatedRoute.parent.snapshot.params.cartId;
    this.customerData = this.activatedRoute.snapshot.data.resolvedCustomer.cartCustomer[0];
    console.log(this.customerData);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedCustomer.error;
  }

}
