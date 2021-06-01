import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-product-info',
  templateUrl: './cart-product-info.component.html',
  styleUrls: ['./cart-product-info.component.css']
})
export class CartProductInfoComponent implements OnInit {

  errorMessage: any;
  cartProducts: any = [];
  cartId: any;
  pageTitle = 'Cart Products';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartId = this.activatedRoute.parent.snapshot.params.cartId;
    console.log(this.cartId);
    console.log(this.activatedRoute.snapshot.data.resolvedProducts);
    this.cartProducts = this.activatedRoute.snapshot.data.resolvedProducts.cartProducts;
    console.log(this.cartProducts);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedProducts.error;
  }

}
