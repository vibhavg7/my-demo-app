import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CartService } from './cart.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartProductsResolver implements Resolve<any> {

  constructor(private cartService: CartService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const cartId = route.parent.params.cartId;
    return this.cartService.fetchCartProducts(cartId)
      .pipe(
        map((cartProductsResolver: any) => {
          console.log(cartProductsResolver);
          console.log(cartProductsResolver.cartproducts);
          return { cartProducts: cartProductsResolver.cartproducts, error: '' };

        }),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          //   console.log(message);
          return of({ cartProducts: null, error: message });
        })
      );
  }
}
