import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail-info',
  templateUrl: './customer-detail-info.component.html',
  styleUrls: ['./customer-detail-info.component.css']
})
export class CustomerDetailInfoComponent implements OnInit {

  customerData: any;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }
  customerId: any = '';
  errorMessage: any = '';
  ngOnInit() {
    this.customerId = +this.activatedRoute.parent.params['_value']['customerId'];
    this.customerService.fetchCustomerInfoById(this.customerId).subscribe((data: any) => {
      this.customerData = data.customer_info[0];
      console.log(this.customerData);
    });
  }

}
