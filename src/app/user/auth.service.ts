import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get isLoggedIn() {
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // return (!!currentUser) ? true : false;
    return !!localStorage.getItem('currentUser');
  }
  // currentUser: User;
  redirectUrl: any;
  authURL: any = 'https://api.grostep.com/employeeapi';

  constructor(private http: HttpClient) {

  }


  login(employee): Observable<any> {
    return this.http.post(`${this.authURL}/validate`, employee).pipe(
      tap(),
      map((employeeData: any) => {
        if (employeeData.status === 200 && employeeData.employeeData[0] !== undefined) {
          localStorage.setItem('currentUser', JSON.stringify(employeeData.employeeData[0]));
        }
        return employeeData;
      })
    );
  }

  getAllEmployeeDashboard(employeeId: any) {
    return this.http.get<any[]>(`${this.authURL}/dashboards/${employeeId}`)
      .pipe(
        tap(data => {
          // console.log(JSON.stringify(data));
        })
        , map((data: any) => {
          return data;

        })
        , catchError(this.handleError)
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
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
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
