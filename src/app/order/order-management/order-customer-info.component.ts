import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-order-customer-info',
  templateUrl: './order-customer-info.component.html',
  styleUrls: ['./order-customer-info.component.css']
})
export class OrderCustomerInfoComponent implements OnInit {

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute ) { }
  customerData: any = [];
  errorMessage: any;
  orderid: any;
  ngOnInit() {
    this.orderid = this.activatedRoute.parent.snapshot.params.orderId;
    this.orderService.fetchOrderDetails(this.orderid).subscribe(
      (data) => {
        this.customerData = data.customerInfo[0];
        console.log(data);
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

}
