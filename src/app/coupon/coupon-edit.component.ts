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

  errorMessage: any;
  submitted: boolean;
  addCouponForm: FormGroup;
  couponId: any;
  constructor(
    private formBuilder: FormBuilder,
    private couponService: CouponService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addCouponForm = this.formBuilder.group({
      voucherCode: ['', Validators.required],
      calculationType: ['', Validators.required],
      voucherValue: ['', Validators.required],
      voucherMaxLimit: ['', Validators.required],
      voucherMinCartAmount: ['', Validators.required],
      expirydatetime: [''],
      voucherMaxUsageCount: ['', Validators.required],
      voucherDescription: ['', Validators.required],
      voucherMaxLimitUser: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addCouponForm.controls; }

  ngOnInit() {
    this.couponId = +this.activatedRoute.snapshot.params.couponId;
    console.log(this.couponId);
    if (this.couponId !== 0) {
      this.couponService.fetchCouponDetails(this.couponId).subscribe((data: any) => {
        const couponData: any = data.coupon;
        console.log(couponData);
        this.addCouponForm.get('voucherCode').setValue(couponData.voucher_code);
        this.addCouponForm.get('voucherValue').setValue(couponData.voucher_value);
        this.addCouponForm.get('calculationType').setValue(couponData.calculation_type);
        this.addCouponForm.get('voucherMaxLimit').setValue(couponData.voucher_max_value);
        this.addCouponForm.get('voucherMinCartAmount').setValue(couponData.voucher_min_cart_value);
        this.addCouponForm.get('voucherDescription').setValue(couponData.voucher_description);
        this.addCouponForm.get('expirydatetime').setValue(couponData.voucher_expiry_date);
        this.addCouponForm.get('voucherMaxUsageCount').setValue(couponData.voucher_max_usage_count);
        this.addCouponForm.get('voucherMaxLimitUser').setValue(couponData.voucher_max_limit_user);
        this.addCouponForm.get('status').setValue(couponData.status);
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.addCouponForm.invalid) {
      return;
    }
    // tslint:disable-next-line:triple-equals
    if (this.couponId == '') {
      this.couponService.addNewCoupon(this.addCouponForm.value).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['coupon']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Banner Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    } else {
      this.couponService.editCoupon(this.addCouponForm.value, this.couponId).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['coupon']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Banner Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
}
