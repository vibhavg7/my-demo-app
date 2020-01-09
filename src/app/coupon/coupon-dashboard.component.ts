import { Component, OnInit } from '@angular/core';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupon-dashboard',
  templateUrl: './coupon-dashboard.component.html',
  styleUrls: ['./coupon-dashboard.component.css']
})
export class CouponDashboardComponent implements OnInit {

  voucherTotalCount: any;
  constructor(private couponservice: CouponService) { }
  pageTitle = 'Coupon Management';
  vouchers: any = [];
  ngOnInit() {
    this.couponservice.fetchAllCoupons(1, 20 , '').subscribe((data: any) => {
      console.log(data);
      this.vouchers = data.vouchers;
      this.voucherTotalCount = data.voucher_total_count.vouchers_count;
    });
  }

}
