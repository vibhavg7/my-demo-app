import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-merchant-info',
  templateUrl: './cart-merchant-info.component.html',
  styleUrls: ['./cart-merchant-info.component.css']
})
export class CartMerchantInfoComponent implements OnInit {

  errorMessage: any;
  merchantData: any;
  cartId: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartId = this.activatedRoute.parent.snapshot.params.cartId;
    this.merchantData = this.activatedRoute.snapshot.data.resolvedMerchant.cartMerchant[0];
    console.log(this.merchantData);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedMerchant.error;
  }

}
