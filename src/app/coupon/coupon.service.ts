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
  private couponServiceUrl = 'https://api.grostep.com/v1/vouchersapi/';

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
    obj.startdatetime = coupon.startdatetime;
    obj.enddatetime = coupon.enddatetime;
    obj.couponMaxLimit = coupon.couponMaxLimit;
    obj.couponCode = coupon.couponCode;
    obj.description = coupon.description;
    obj.couponMaxLimitUser = coupon.couponMaxLimitUser;
    obj.couponMaxUsageCount = coupon.couponMaxUsageCount;
    obj.couponMinCartAmount = coupon.couponMinCartAmount;
    obj.couponValue = coupon.couponValue;
    obj.createdBy = currentUser.employee_id;
    obj.customerId = coupon.customerId;
    obj.storeId = coupon.storeId;
    obj.couponType = coupon.couponType;
    obj.city = '';
    // obj.voucherType = '';
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

    obj.coupon_last_updated = coupon.calculationType;
    obj.coupon_start_date = coupon.startdatetime;
    obj.coupon_end_date = coupon.enddatetime;
    obj.coupon_max_value = coupon.couponMaxLimit;
    obj.coupon_code = coupon.couponCode;
    obj.coupon_description = coupon.description;
    obj.coupon_max_limit_user = coupon.couponMaxLimitUser;
    obj.coupon_daily_usage_limit = coupon.couponMaxUsageCount;
    obj.coupon_min_cart_value = coupon.couponMinCartAmount;
    obj.coupon_value = coupon.couponValue;
    obj.customer_id = coupon.customerId;
    obj.store_id = coupon.storeId;
    obj.coupon_type = coupon.couponType;
    // obj.city = '';
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

  fetchCouponDetails(couponId: any) {
    return this.http.get<any[]>(`${this.couponServiceUrl}couponinfo/${couponId}`)
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
