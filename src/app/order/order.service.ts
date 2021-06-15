import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private orderService: any = 'https://api.grostep.com/v2/ordersapi/';
  public orderDetails: any = '';
  public orders: any = [];

  fetchStatusTypes(): Observable<any> {
    return this.http.get<any>(`${this.orderService}fetchOrderStatusTypes`).pipe(
      tap(data => {
        console.log(data);
      })
      , map((data) => {
          return data;
      })
      , catchError(this.handleError)
    );
  }

  fetchAllOrders(pagenumber: number, pagesize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.filterBy = filterBy;
    obj.order_type = '';
    obj.storeId = '';
    return this.http.post<any[]>(`${this.orderService}fetchallOrders`, obj)
      .pipe(
        tap((data: any) => {
          this.orders = data.orders_info;
          console.log(this.orders);
          console.log(JSON.stringify(data));
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchOrderDetails(orderId): Observable<any> {
    return this.http.get<any>(`${this.orderService}${orderId}`).pipe(
      tap(data => {
        console.log(data);
      })
      , map((data) => {
          return data;
      })
      , catchError(this.handleError)
    );
  }

  editOrderInfo(editorderForm: any, orderId): Observable<any> {

    const url = `${this.orderService}${orderId}`;
    const obj: any = {};
    obj.delivery_fee = +editorderForm.delivery_fee;
    obj.delivery_person_id = +editorderForm.assinged_delivery_person;
    obj.discount_amount = +editorderForm.discount_amount;
    obj.instructions = editorderForm.instructions;
    obj.merchant_bill_amount = +editorderForm.merchant_bill_amount;
    obj.order_deliveryperson_status = +editorderForm.order_deliveryperson_status;
    obj.order_merchant_status = +editorderForm.order_merchant_status;
    obj.payable_amount = +editorderForm.payable_amount;
    obj.status = +editorderForm.status;
    obj.is_order_edit = +editorderForm.isOrderEdit;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, obj, { headers }).pipe(
      tap(data => {
        // console.log(JSON.stringify(data))
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
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
