import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from './order.service';
import { MerchantService } from '../merchant/merchant.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderProductsResolver implements Resolve<any>
{
  constructor(private merchantService: MerchantService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const orderId = route.parent.params.orderId;
    return this.merchantService.fetchOrderProducts(orderId)
      .pipe(
        map((orderProductsResolver: any) => (
          console.log(orderProductsResolver),
          { orderProducts: orderProductsResolver.order_products_info, error: '' }
        )),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          //   console.log(message);
          return of({ orderProducts: null, error: message });
        })
      );
  }
}
