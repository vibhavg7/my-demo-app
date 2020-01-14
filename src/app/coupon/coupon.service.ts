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
  private couponServiceUrl = 'http://ec2-18-224-29-78.us-east-2.compute.amazonaws.com:3000/vouchersapi/';

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
    const obj: any = {};
    obj.voucherCode = coupon.voucherCode;
    obj.voucherAmount = coupon.voucherAmount;
    obj.expirydatetime = coupon.expirydatetime;
    obj.voucherCartAmount = coupon.voucherCartAmount;
    obj.voucherType = coupon.voucherType;
    obj.description = coupon.description;
    obj.status = +coupon.status;
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
    // console.log(store);
    const obj: any = {};

    obj.voucher_code = coupon.voucherCode;
    obj.voucher_amount = coupon.voucherAmount;
    obj.expiry_datetime = coupon.expirydatetime;
    obj.voucher_cart_amount = coupon.voucherCartAmount;
    obj.voucher_type = coupon.voucherType;
    obj.description = coupon.description;
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
