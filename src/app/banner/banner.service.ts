import { Injectable } from '@angular/core';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, map, catchError, debounceTime } from 'rxjs/operators';
import { ErrorTracker } from '../shared/errorTracker';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }
  private bannerServiceUrl = 'https://api.grostep.com/v2/bannerapi/';

  fetchAllBanners( pageNumber: number, pageSize: any, filterBy: any): Observable<any> {
    const obj: any = {};
    obj.page_number = pageNumber; obj.page_size = pageSize; obj.filterBy = filterBy;
    console.log(obj);
    return this.http.post<any[]>(`${this.bannerServiceUrl}bannerinfo`, obj)
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

  fetchBannerDetails(bannerId: any) {
    return this.http.get<any[]>(`${this.bannerServiceUrl}bannerinfo/${bannerId}`)
    .pipe(
      tap(data => {
      })
      , map((data) => {
        return data;
      })
      , catchError(this.handleError)
    );
  }

  addNewBanner(banner: any): Observable<any> {
    const obj: any = {};
    obj.bannerName = banner.bannerName;
    obj.zipCode = banner.zipCode;
    obj.status = banner.status;
    const url = `${this.bannerServiceUrl}addnewbanner`;
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

  deleteStore(bannerId): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.bannerServiceUrl}bannerinfo/${bannerId}`;
    return this.http.delete(url, { headers }).pipe(
        tap(data => {
        }),
        catchError(this.handleError)
    );
  }

  editBanner(banner: any, bannerId): Observable<any> {
    // console.log(store);
    const obj: any = {};

    obj.banner_name = banner.bannerName;
    obj.zipCode = banner.zipCode;
    obj.status = +banner.status;

    const url = `${this.bannerServiceUrl}bannerinfo/${bannerId}`;
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
