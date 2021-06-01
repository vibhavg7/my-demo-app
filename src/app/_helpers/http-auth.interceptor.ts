import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { AuthService } from '../user/auth.service';
import { catchError, map, filter, take, switchMap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  token: any = '';
  private AUTH_HEADER = 'Authorization';
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private authenticationService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    this.token = localStorage.getItem('bearertoken');
    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({
    //     headers: request.headers.set('Content-Type', 'application/json')
    //   });
    // }
    if (!request.headers.has('appclient')) {
      request = request.clone({
        headers: request.headers.set('appclient', 'adminpanel')
      });
    }
    request = this.addAuthenticationToken(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let handled = false;
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Error Event');
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      // login
                localStorage.removeItem('currentUser');
                localStorage.removeItem('bearertoken');
                this.router.navigateByUrl('/login');
                handled = true;
                break;
              case 403:     // forbidden
                this.router.navigateByUrl('/unauthorized');
                handled = true;
                break;
            }
          }
        } else {
          console.error('some thing else happened');
        }
        if (handled) {
          console.log('return back ');
          return of(error);
        } else {
          console.log('throw error back to to the subscriber');
          return throwError(error);
        }
      })
    ) as Observable<HttpEvent<any>>;
  }

  private refreshAccessToken(): Observable<any> {
    return of(this.token);
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    // If we do not have a token yet then we should not set the header.
    // Here we could first retrieve the token from where we store it.
    if (!this.token) {
      return request;
    }
    // // If you are calling an outside domain then do not add the token.
    // if (!request.url.match(/www.mydomain.com\//)) {
    //   return request;
    // }
    return request.clone({
      headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.token)
    });
  }
}
