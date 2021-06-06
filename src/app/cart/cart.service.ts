import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartInfo: any = [];
  cartData: any;
  customerCarts: any = [];
  constructor(private http: HttpClient) { }

  private cartServiceUrl = 'https://api.grostep.com/v1/cartapi/';

  fetchAllCartInformation(pagenumber: any, pagesize: any, filterBy: any, customerId: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize;
    obj.filterBy = filterBy;
    obj.customerId = customerId;

    return this.http.post<any[]>(`${this.cartServiceUrl}fetchcartsinfo`, obj)
      .pipe(
        tap((data: any) => {
          this.cartInfo = data.carts_info;
          console.log(this.cartInfo);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchCustomerInfoById(cartId: any): Observable<any> {
    if (this.cartData) {
      return of(this.cartData);
    }
    return this.http.get(`${this.cartServiceUrl}customerinfo/${cartId}`).pipe(
      tap(data => {
        this.cartData = data;
      })
      , map((cartData) => {
        return cartData;
      })
      , catchError(this.handleError)
    );
  }


  fetchAllCustomerCart(customerId: number, pagenumber: number, pagesize: number, filterBy: any, refreshData: any) {
    const obj: any = {};
    obj.page_number = pagenumber; obj.page_size = pagesize; obj.customerId = customerId;
    obj.filterBy = filterBy;
    if (this.customerCarts.length > 0 && !refreshData) {
      console.log('inside');
      let filteredCartData = [];
      if (filterBy) {
        filteredCartData = this.customerCarts.filter(
          (cartInfo: any) => {
            return +cartInfo.cart_id === +filterBy;
          }
        );
      } else {
        filteredCartData = this.customerCarts;
      }
      console.log(filteredCartData);
      return of({
        status: 200,
        customer_carts_count: filteredCartData.length,
        customer_carts_info: filteredCartData
      });
    }

    return this.http.post<any[]>(`${this.cartServiceUrl}customercarts`, obj)
      .pipe(
        tap((data: any) => {
          this.customerCarts = data.customer_carts_info;
          // console.log(data);
        })
        , map((data) => {
          return data;
        })
        , catchError(this.handleError)
      );
  }

  fetchCartDetails(cartId: any): Observable<any> {
    if (this.cartInfo.length > 0) {
      const filteredCartData = this.cartInfo.filter(
        (cartData: any) => {
          return +cartData.cart_id === +cartId;
        }
      );
      return of(filteredCartData[0]);
    }

    return this.http.get<any>(`${this.cartServiceUrl}${cartId}`).pipe(
      tap(data => {
        console.log(data);
      })
      , map((data) => {
          return data;
      })
      , catchError(this.handleError)
    );

  }


  fetchCartProducts(cartId: any): Observable<any> {
    if (this.cartInfo.length > 0) {
      const filteredCartData = this.cartInfo.filter(
        (cartData: any) => {
          return +cartData.cart_id === +cartId;
        }
      );
      return of(filteredCartData[0]);
    }

    return this.http.get<any[]>(`${this.cartServiceUrl}cartproducts/${cartId}`)
      .pipe(
        tap(data => {
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
