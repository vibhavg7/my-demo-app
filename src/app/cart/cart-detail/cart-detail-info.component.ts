import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-detail-info',
  templateUrl: './cart-detail-info.component.html',
  styleUrls: ['./cart-detail-info.component.css']
})
export class CartDetailInfoComponent implements OnInit {

  errorMessage: any;
  cartId: number;
  cartData: any;
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartId = this.activatedRoute.parent.snapshot.params.cartId;
    this.cartData = this.activatedRoute.snapshot.data.resolvedCustomer.cartInfo;
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedCustomer.error;
    console.log(this.cartData);
    // this.cartId = +this.activatedRoute.parent.params['_value']['cartId'];
    // this.cartService.fetchCartDetails(this.cartId).subscribe((data: any) => {
    //   this.cartData = data.cartInfo[0];
    //   console.log(this.cartData);
    // });
  }

}
