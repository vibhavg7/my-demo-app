import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-merchant-info',
  templateUrl: './order-merchant-info.component.html',
  styleUrls: ['./order-merchant-info.component.css']
})
export class OrderMerchantInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  merchantData: any = [];
  errorMessage: any;
  orderid: any;
  ngOnInit() {
    this.orderid = this.activatedRoute.parent.snapshot.params.orderid;
    this.merchantData = this.activatedRoute.snapshot.data.resolvedMerchant.orderMerchant[0];
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedMerchant.error;
  }

}
