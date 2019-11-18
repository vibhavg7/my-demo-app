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
        return !! localStorage.getItem('currentUser');
    }
    // currentUser: User;
    redirectUrl: any;
    _authURL: any = "http://ec2-3-134-77-29.us-east-2.compute.amazonaws.com:3000/";

    constructor(private _http: HttpClient) {

    }
   

    login(employee) : Observable<any>
    {
        return this._http.post(`${this._authURL}employeeapi/validate`, employee).pipe(
            tap(),
            map((employeeData)=>{
                if (employeeData['status'] == 200 && employeeData['employeeData'][0] != undefined) {
                    console.log('not a valid user' + employeeData['employeeData'][0]);
                    localStorage.setItem('currentUser', JSON.stringify(employeeData['employeeData'][0]));
                }
                return employeeData;
            })
        )

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