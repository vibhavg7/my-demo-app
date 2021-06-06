import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CartService } from './cart.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartResolverService implements Resolve<any> {

  constructor(private cartService: CartService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.cartService.fetchAllCartInformation(1, 20, '', '')
      .pipe(
        map((customerResolver: any) => {
          console.log(customerResolver);
          return {
            carts: customerResolver.carts_info,
            cart_total_count: customerResolver.cart_total_count[0].customer_cart_count, error: ''
          };
        }),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          return of({ carts: null, error: message });
        })
      );
  }
}
