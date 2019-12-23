import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private customerServiceUrl = 'http://localhost:3000/customerapi/';
  customerData: any;
  customerDeliveryAddresses: any;

  fetchAllCustomers(pagenumber: number, pagesize: any, filterBy: any): Observable<any> {
    // if (this.custom) {
    //   return of(this.stores);
    // }
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.filterBy = filterBy;

    return this.http.post<any[]>(`${this.customerServiceUrl}customerinfo`, obj)
      .pipe(
        tap(data => {
          // console.log(JSON.stringify(data))
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

    return this.http.post<any[]>(`${this.customerServiceUrl}/customerinfo/customerorders`, obj)
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

  fetchCustomerInfoById(customerId: any): Observable<any> {
    // if (this.customerData){
    //   return of(this.customerData);
    // }
    return this.http.get(`${this.customerServiceUrl}customerinfo/${customerId}`).pipe(
      tap(data => {
        // this.customerData = data;
      })
      , map((customerData) => {
        return customerData;
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
