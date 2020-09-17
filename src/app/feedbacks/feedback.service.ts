import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private customerServiceUrl = 'https://api.grostep.com/customerapi/';
  constructor(private httpClient: HttpClient) { }

  fetchAllFeedBacks(pageNumber: number, pageSize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.filterBy = filterBy;
    // console.log(obj);
    return this.httpClient.post<any[]>(`${this.customerServiceUrl}customerFeedback`, obj)
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

  fetchFeedBackDetailById(pageNumber: number, pageSize: any, filterBy: any, feedbackId: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.filterBy = filterBy; obj.feedbackId = feedbackId;
    // console.log(obj);
    return this.httpClient.post<any[]>(`${this.customerServiceUrl}customerFeedbackInfo/${feedbackId}`, obj)
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

  addNewFeedBack(feedBack): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const obj: any = {};
    obj.customer_id = feedBack.customer_id;
    obj.name = feedBack.name;
    obj.email = feedBack.email;
    obj.phone = feedBack.phone;
    obj.message = feedBack.message;
    obj.parentId = 0; // feedBack.parentId;
    obj.actionBy = currentUser.employee_id;
    obj.customerCity = feedBack.customerCity;
    obj.ticketMode = 2; // admin panel;
    const url = `${this.customerServiceUrl}addCustomerFeedback`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(url, obj, { headers }).pipe(
      tap(data => {
      }),
      map((data) => {
        return data;
      }),
      catchError(err => this.handleError(err))
    );
  }


  editFeedBack(feedBack, feedbackId) {

  }

  private handleError(err: HttpErrorResponse): Observable<ErrorTracker> {
    const dataError = new ErrorTracker();
    dataError.errorNumber = 100;
    dataError.errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    dataError.friendlyMessage = 'An error retriving data';
    return throwError(dataError);
  }
}
