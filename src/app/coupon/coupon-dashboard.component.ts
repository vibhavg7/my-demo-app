import { Component, OnInit } from '@angular/core';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupon-dashboard',
  templateUrl: './coupon-dashboard.component.html',
  styleUrls: ['./coupon-dashboard.component.css']
})
export class CouponDashboardComponent implements OnInit {

  couponTotalCount: any;
  currentPage = 1;
  pageSize = 20;
  filterBy: any = '';
  constructor(private couponservice: CouponService) { }
  pageTitle = 'Coupon Management';
  coupons: any = [];
  errorMessage: any;
  ngOnInit() {
    this.couponservice.fetchAllCoupons(this.currentPage, this.pageSize, '').subscribe((data: any) => {
      console.log(data);
      this.coupons = data.coupons;
      this.couponTotalCount = data.coupon_total_count.coupon_count;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  currentPageFn(page) {
    this.couponservice.fetchAllCoupons(page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.coupons = data.coupons;
        this.couponTotalCount = data.coupon_total_count.coupon_count;
      }, (error) => {
        this.errorMessage = error;
      });
  }

}
