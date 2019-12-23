import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  private orderService: any = 'http://localhost:3000/orderapi/';
  public orderDetails: any = '';


  fetchOrderDetails(orderId): Observable<any> {
    // console.log(this.orderDetails);
    // if (this.orderDetails) {
    //   return of(this.orderDetails);
    // }
    return this.http.get<any>(`${this.orderService}${orderId}`).pipe(
      tap(data => {
        // console.log(data);
      })
      , map((data) => {
          // this.orderDetails = data;
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
