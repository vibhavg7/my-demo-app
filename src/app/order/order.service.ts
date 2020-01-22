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
  private orderService: any = 'http://ec2-13-233-10-240.ap-south-1.compute.amazonaws.com:3000/ordersapi/';
  public orderDetails: any = '';


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

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    const dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = 'An error retriving data';
    return throwError(dataError);
  }
}
