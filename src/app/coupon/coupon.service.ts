import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError, debounceTime } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient) { }
  private couponServiceUrl = 'http://13.233.10.240:3000/vouchersapi/';

  fetchAllCoupons(pageNumber: number, pageSize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.filterBy = filterBy;
    console.log(obj);
    return this.http.post<any[]>(`${this.couponServiceUrl}couponinfo`, obj)
      .pipe(
        tap(data => {
          // console.log(JSON.stringify(data));
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  deleteCoupon(voucherId): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.couponServiceUrl}couponinfo/${voucherId}`;
    return this.http.delete(url, { headers }).pipe(
      tap(data => {
      }),
      catchError(this.handleError)
    );
  }

  addNewCoupon(coupon: any): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const obj: any = {};
    obj.calculationType = coupon.calculationType;
    obj.expirydatetime = coupon.expirydatetime;
    obj.voucherMaxUsageCount = coupon.voucherMaxUsageCount;
    obj.voucherCode = coupon.voucherCode;
    obj.voucherDescription = coupon.voucherDescription;
    obj.voucherMaxLimit = coupon.voucherMaxLimit;
    obj.voucherMaxLimitUser = coupon.voucherMaxLimitUser;
    obj.voucherMinCartAmount = coupon.voucherMinCartAmount;
    obj.voucherValue = coupon.voucherValue;
    obj.createdBy = currentUser.employee_id;
    obj.customerId = '';
    obj.city = '';
    obj.voucherType = '';
    obj.status = +coupon.status;
    console.log(obj);
    const url = `${this.couponServiceUrl}addnewcoupon`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, obj, { headers }).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(err => this.handleError(err))
    );
  }

  editCoupon(coupon: any, couponId): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const obj: any = {};

    obj.calculation_type = coupon.calculationType;
    obj.voucher_expiry_date = coupon.expirydatetime;
    obj.voucher_max_usage_count = coupon.voucherMaxUsageCount;
    obj.voucher_code = coupon.voucherCode;
    obj.voucher_description = coupon.voucherDescription;
    obj.voucher_max_value = coupon.voucherMaxLimit;
    obj.voucher_max_limit_user = coupon.voucherMaxLimitUser;
    obj.voucher_min_cart_value = coupon.voucherMinCartAmount;
    obj.voucher_value = coupon.voucherValue;
    obj.voucher_created_by = currentUser.employee_id;
    // obj.customerId = '';
    obj.voucher_city = 4;
    obj.voucher_type = '';
    obj.status = +coupon.status;

    const url = `${this.couponServiceUrl}couponinfo/${couponId}`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, obj, { headers }).pipe(
      tap(data => {
        // console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  fetchCouponDetails(voucherId: any) {
    return this.http.get<any[]>(`${this.couponServiceUrl}couponinfo/${voucherId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    const dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = 'An error retriving data';
    return throwError(dataError);
  }


}
