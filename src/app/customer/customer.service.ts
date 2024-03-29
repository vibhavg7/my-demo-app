import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerOrders: any;
  customerCarts: any = [];
  constructor(private http: HttpClient) { }

  private customerServiceUrl = 'https://api.grostep.com/v2/customerapi/';
  customerData: any;
  customerIds: any;
  customerDeliveryAddresses: any;

  get customerNotificationIds() {
    return this.customerIds;
  }

  set customerNotificationIds(value) {
    this.customerIds = value;
  }

  fetchAllCustomers(pagenumber: number, pagesize: any, filterBy: any): Observable<any> {

    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.filterBy = filterBy;

    return this.http.post<any[]>(`${this.customerServiceUrl}customerinfo`, obj)
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

  fetchAllCustomerOrders(customerId: number, pagenumber: number, pagesize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.customerId = customerId;
    obj.filterBy = filterBy;
    console.log(obj);

    return this.http.post<any[]>(`${this.customerServiceUrl}customerinfo/customerorders`, obj)
      .pipe(
        tap((data: any) => {
          this.customerOrders = data.customer_orders_info;
          console.log(this.customerOrders);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }


  fetchOrderProducts(orderId: any): Observable<any> {
    if (this.customerOrders.length > 0) {
      console.log('inside');
      const filteredOrderData = this.customerOrders.filter(
        (customerOrder: any) => {
          return +customerOrder.order_id === +orderId;
        }
      );
      return of(filteredOrderData[0]);
    }
    return this.http.get<any[]>(`${this.customerServiceUrl}customerinfo/customerorderproducts/${orderId}`)
      .pipe(
        tap(data => {
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
    // }
  }

  fetchCustomerInfoById(customerId: any): Observable<any> {
    console.log(this.customerData);
    if (this.customerData) {
      console.log(this.customerData);
      return of(this.customerData);
    }
    return this.http.get(`${this.customerServiceUrl}customerinfo/${customerId}`).pipe(
      tap(data => {
        this.customerData = data;
      })
      , map((customerData) => {
        return customerData;
      })
      , catchError(this.handleError)
    );
  }

  registerCustomer(addCustomerForm) {
    const obj: any = {};
    obj.customerName = addCustomerForm.customerName;
    obj.customerPhone = addCustomerForm.customerPhone;
    obj.customerDOB = addCustomerForm.customerDOB;
    obj.status = addCustomerForm.status;

    const url = `${this.customerServiceUrl}registerCustomerFromAdminPanel`;
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

  editCustomer(addCustomerForm, customerId) {
    const obj: any = {};
    obj.customer_name = addCustomerForm.customerName;
    obj.customer_dob = addCustomerForm.customerDOB;
    obj.phone = addCustomerForm.customerPhone;
    obj.status = addCustomerForm.status;
    obj.email = addCustomerForm.customerEmail;
    console.log(obj);

    return this.http.put(`${this.customerServiceUrl}/updateCustomerFromAdminPanel/${customerId}`, obj).pipe(
      tap(data => {
        // console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  sendNotification(notificationType: any, addNotificationForm: any) {
    const obj: any = {};
    obj.notificationType = +notificationType; obj.customerIds = this.customerNotificationIds;
    obj.messageTitle = addNotificationForm.messageTitle; obj.messageBody = addNotificationForm.messageBody;
    console.log(obj);

    return this.http.post<any[]>(`${this.customerServiceUrl}/sendUserNotificationFromAdminPanel`, obj)
      .pipe(
        tap(data => {
          console.log(data);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }
}
