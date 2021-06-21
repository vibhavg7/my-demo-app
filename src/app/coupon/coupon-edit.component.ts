import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from './coupon.service';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.css']
})
export class CouponEditComponent implements OnInit {

  customerId: number;
  storeId: number;
  errorMessage: any;
  submitted: boolean;
  addCouponForm: FormGroup;
  couponId: any;
  disableForm = false;
  constructor(
    private formBuilder: FormBuilder,
    private couponService: CouponService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addCouponForm = this.formBuilder.group({
      couponCode: ['', Validators.required],
      calculationType: ['', Validators.required],
      couponValue: ['', Validators.required],
      couponMaxLimit: ['', Validators.required],
      couponMinCartAmount: ['', Validators.required],
      startdatetime: [''],
      enddatetime: [''],
      couponType: [''],
      customerId: [''],
      storeId: [''],
      couponMaxUsageCount: ['', Validators.required],
      description: ['', Validators.required],
      couponMaxLimitUser: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addCouponForm.controls; }

  ngOnInit() {
    this.couponId = +this.activatedRoute.snapshot.params.couponId;
    this.storeId = +this.activatedRoute.snapshot.queryParamMap.get('storeId');
    this.customerId = +this.activatedRoute.snapshot.queryParamMap.get('customerId');
    this.addCouponForm.get('couponType').setValue(3);
    if (this.customerId) {
      this.addCouponForm.get('customerId').setValue(this.customerId);
      this.addCouponForm.get('couponType').setValue(1);
    }
    if (this.storeId) {
      this.addCouponForm.get('storeId').setValue(this.storeId);
      this.addCouponForm.get('couponType').setValue(2);
    }
    if (this.couponId !== 0) {
      this.couponService.fetchCouponDetails(this.couponId).subscribe((data: any) => {
        const couponData: any = data.coupon;
        console.log(couponData);
        this.addCouponForm.get('couponCode').setValue(couponData.coupon_code);
        this.addCouponForm.get('couponValue').setValue(couponData.coupon_value);
        this.addCouponForm.get('calculationType').setValue(couponData.calculation_type);
        this.addCouponForm.get('couponMaxLimit').setValue(couponData.coupon_max_value);
        this.addCouponForm.get('couponMinCartAmount').setValue(couponData.coupon_min_cart_value);
        this.addCouponForm.get('description').setValue(couponData.coupon_description);
        this.addCouponForm.get('startdatetime').setValue(couponData.coupon_start_date);
        this.addCouponForm.get('enddatetime').setValue(couponData.coupon_end_date);
        this.addCouponForm.get('couponMaxUsageCount').setValue(couponData.coupon_daily_usage_limit);
        this.addCouponForm.get('couponMaxLimitUser').setValue(couponData.coupon_max_limit_user);
        this.addCouponForm.get('status').setValue(couponData.status);
        this.addCouponForm.get('customerId').setValue(couponData.customer_id);
        this.addCouponForm.get('storeId').setValue(couponData.store_id);
        this.addCouponForm.get('couponType').setValue(couponData.coupon_type);
        // this.customerId = couponData.customer_id;
        // this.storeId = couponData.store_id;
      });
    }
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addCouponForm.invalid) {
        this.disableForm = false;
        return;
      }
      console.log(this.addCouponForm.value);
      console.log(this.couponId);
      if (+this.couponId === 0) {
        this.couponService.addNewCoupon(this.addCouponForm.value).subscribe((data: any) => {
          if (data.status === 200) {
            this.router.navigate(['coupon']);
          }
          if (data.status === 400) {
            alert('Coupon Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          });
      } else {
        this.couponService.editCoupon(this.addCouponForm.value, this.couponId).subscribe((data: any) => {
          if (data.status === 200) {
            this.router.navigate(['coupon']);
          }
          // tslint:disable-next-line:triple-equals
          if (data.status == 400) {
            alert('Coupon Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
          }
        );
      }
    }
  }
}
