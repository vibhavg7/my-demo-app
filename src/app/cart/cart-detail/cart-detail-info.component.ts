import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail-info',
  templateUrl: './cart-detail-info.component.html',
  styleUrls: ['./cart-detail-info.component.css']
})
export class CartDetailInfoComponent implements OnInit {

  cartId: number;
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartId = +this.activatedRoute.parent.params['_value']['cartId'];
    this.cartService.fetchCustomerInfoById(this.cartId).subscribe((data: any) => {
      // this.customerData = data.customer_info[0];
      // console.log(this.customerData);
    });
  }

}
