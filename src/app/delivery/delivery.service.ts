import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient) { }

  private deliveryServiceUrl = 'https://api.grostep.com/deliveryapi/';
  customerData: any;
  customerDeliveryAddresses: any;

  fetchAllDeliveryPersons(pagenumber: number, pagesize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.filterBy = filterBy;

    return this.http.post<any[]>(`${this.deliveryServiceUrl}deliveryinfo`, obj)
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

  fetchDeliveryPersonDetails(id: any) {
    return this.http.get<any[]>(`${this.deliveryServiceUrl}deliveryinfo/${id}`)
    .pipe(
      tap(data => {
      })
      , map((data) => {
        return data;
      })
      , catchError(this.handleError)
    );
  }

  addNewDeliveryPerson(deliveryPersoninfo: any): Observable<any> {
    const obj: any = {};
    obj.deliveryPersonName = deliveryPersoninfo.deliveryPersonName;
    obj.aadharNumber = deliveryPersoninfo.aadharNumber;
    obj.status = deliveryPersoninfo.status;
    obj.panNumber = deliveryPersoninfo.panNumber;
    obj.phone = deliveryPersoninfo.phone;
    obj.email = deliveryPersoninfo.email;
    console.log(obj);
    const url = `${this.deliveryServiceUrl}addnewdeliveryperson`;
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

  editDeliveryPerson(deliveryPersoninfo: any, deliveryPersonId): Observable<any> {
    // console.log(store);
    const obj: any = {};

    obj.delivery_person_name = deliveryPersoninfo.deliveryPersonName;
    obj.aadhar_number = deliveryPersoninfo.aadharNumber;
    obj.status = deliveryPersoninfo.status;
    obj.pan_number = deliveryPersoninfo.panNumber;
    obj.phone = deliveryPersoninfo.phone;
    obj.email = deliveryPersoninfo.email;

    const url = `${this.deliveryServiceUrl}deliveryinfo/${deliveryPersonId}`;
    console.log(url);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(url, obj, { headers }).pipe(
      tap(data => { console.log(JSON.stringify(data));
      }),
      map((data) => {
        return data;
      }),
      catchError(this.handleError)
    );
  }

  fetchAllDeliveryPersonRunningOrders(deliveryPersonId: number, pagenumber: number, pagesize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize;
    obj.filterBy = filterBy;
    console.log(obj);

    return this.http.post<any[]>(`${this.deliveryServiceUrl}fetchAllRunningOrders/${deliveryPersonId}`, obj)
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

  fetchAllDeliveryPersonPastOrders(deliveryPersonId: number, pagenumber: number, pagesize: number, filterBy: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize;
    obj.deliveryPersonId = deliveryPersonId;
    obj.filterBy = filterBy;
    console.log(obj);

    return this.http.post<any[]>(`${this.deliveryServiceUrl}deliveryinfo/deliverypersonpastorders`, obj)
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
