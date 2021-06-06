import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartMerchantResolver  implements Resolve<any> {

  constructor(private cartService: CartService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const cartId = route.parent.params.cartId;
    return this.cartService.fetchCartDetails(cartId)
    .pipe(
      map(cartmechantResolver => (
        console.log(cartmechantResolver),
        { cartMerchant: cartmechantResolver.storeInfo, error: '' }
      )),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        //   console.log(message);
        return of({ orderCustomer: null, error: message });
      })
    );
  }
}
