import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscriptionServiceUrl = 'http://13.233.10.240:3000/customerapi/';
  constructor(private httpClient: HttpClient) { }

  fetchAllSubscriptons(pageNumber: number, pageSize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.pageNumber = pageNumber; obj.pageSize = pageSize; obj.filterBy = filterBy;
    console.log(obj);
    return this.httpClient.post<any[]>(`${this.subscriptionServiceUrl}subscriptioninfo`, obj)
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

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {

    const dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = 'An error retriving data';
    return throwError(dataError);
    // let errorMessage = '';
    // if (err.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   errorMessage = `An error occurred: ${err.error.message}`;
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    // }
    // // console.error(errorMessage);
    // return throwError(errorMessage);
  }
}
