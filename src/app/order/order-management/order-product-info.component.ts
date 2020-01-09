import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-product-info',
  templateUrl: './order-product-info.component.html',
  styleUrls: ['./order-product-info.component.css']
})
export class OrderProductInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  orderid: any;
  orderProducts: any = [];
  errorMessage: any;
  pageTitle = 'Order Products';
  ngOnInit() {
    this.orderid = this.activatedRoute.parent.snapshot.params.orderid;
    this.orderProducts = this.activatedRoute.snapshot.data.resolvedProducts.orderProducts;
    console.log(this.orderProducts);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedProducts.error;
  }

}
