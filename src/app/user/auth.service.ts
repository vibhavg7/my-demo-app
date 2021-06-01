import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';


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
  authURL: any = 'https://api.grostep.com/v2/employeeapi';

  constructor(private http: HttpClient, private router: Router) {

  }


  login(employee): Observable<any> {
    return this.http.post(`${this.authURL}/login`, employee).pipe(
      tap(),
      map((employeeData: any) => {
        // && employeeData.employeeData[0] !== undefined
        if (employeeData.status === 200) {
          localStorage.setItem('currentUser', JSON.stringify(employeeData.employeeData));
          localStorage.setItem('bearertoken', employeeData.token);
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
    localStorage.removeItem('bearertoken');
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

    // if (error instanceof HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     console.error('Error Event');
    //   } else {
    //     console.log(`error status : ${error.status} ${error.statusText}`);
    //     switch (error.status) {
    //       case 401:      // login
    //         // this.router.navigateByUrl("/login");
    //         this.router.navigateByUrl('/login');
    //         break;
    //       case 403:     // forbidden
    //         this.router.navigateByUrl('/login');
    //         break;
    //     }
    //   }
    // } else {
    //   console.error('some thing else happened');
    // }
    return throwError(err);
  }
}
