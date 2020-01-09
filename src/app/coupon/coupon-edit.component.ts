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
      voucherAmount: ['', Validators.required],
      expirydatetime: [''],
      voucherCartAmount: ['', Validators.required],
      voucherType: ['', Validators.required],
      description: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addCouponForm.controls; }

  ngOnInit() {
    this.couponId = +this.activatedRoute.snapshot.params.couponId;
    if (this.couponId !== 0) {
      this.couponService.fetchCouponDetails(this.couponId).subscribe((data: any) => {
        const couponData: any = data.coupon;
        console.log(couponData);
        this.addCouponForm.get('voucherCode').setValue(couponData.voucher_code);
        this.addCouponForm.get('voucherAmount').setValue(couponData.voucher_amount);
        this.addCouponForm.get('expirydatetime').setValue(couponData.expiry_datetime);
        this.addCouponForm.get('voucherCartAmount').setValue(couponData.voucher_cart_amount);
        this.addCouponForm.get('voucherType').setValue(couponData.voucher_type);
        this.addCouponForm.get('description').setValue(couponData.description);
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
