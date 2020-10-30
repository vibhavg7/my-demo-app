import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-invoice-info',
  templateUrl: './order-invoice-info.component.html',
  styleUrls: ['./order-invoice-info.component.css']
})
export class OrderInvoiceInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }
  invoiceData: any = [];
  errorMessage: any;
  orderid: any;
  ngOnInit() {
    this.orderid = this.activatedRoute.parent.snapshot.params.orderid;
    this.invoiceData = this.activatedRoute.snapshot.data.resolvedInvoice.orderInvoice[0];
    console.log(this.invoiceData);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedInvoice.error;
  }

  repairOrder() {
    alert('Work under progres');
  }

  downloadBillImage(downloadLink, orderid) {
    // console.log(downloadLink);
    // this.orderService.getImage(downloadLink).subscribe(
    //   (res) => {
    //         // const a = document.createElement('a');
    //         // a.href = URL.createObjectURL(res);
    //         // a.download = orderid + 'billimage';
    //         // document.body.appendChild(a);
    //         // a.click();
    //   });
    }
  }

