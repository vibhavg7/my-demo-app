import { Component, OnInit } from '@angular/core';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupon-dashboard',
  templateUrl: './coupon-dashboard.component.html',
  styleUrls: ['./coupon-dashboard.component.css']
})
export class CouponDashboardComponent implements OnInit {

  voucherTotalCount: any;
  currentPage = 1;
  pageSize = 20;
  filterBy: any = '';
  constructor(private couponservice: CouponService) { }
  pageTitle = 'Coupon Management';
  vouchers: any = [];
  errorMessage: any;
  ngOnInit() {
    this.couponservice.fetchAllCoupons(this.currentPage, this.pageSize, '').subscribe((data: any) => {
      console.log(data);
      this.vouchers = data.vouchers;
      this.voucherTotalCount = data.voucher_total_count.vouchers_count;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  currentPageFn(page) {
    this.couponservice.fetchAllCoupons(page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.vouchers = data.vouchers;
        this.voucherTotalCount = data.voucher_total_count.vouchers_count;
      }, (error) => {
        this.errorMessage = error;
      });
  }

}
