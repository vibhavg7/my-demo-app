import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from './order.service';
import { map, catchError } from 'rxjs/operators';
import { MerchantService } from '../merchant/merchant.service';

@Injectable({
    providedIn: 'root'
})
export class OrderMerchantInfoResolver implements Resolve<any> {
  constructor(private merchantService: MerchantService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const orderid = route.parent.params.orderId;
    return this.merchantService.fetchOrderDetails(orderid)
      .pipe(
        map(ordermerchantResolver => (
          { orderMerchant: ordermerchantResolver.storeInfo, error: '' }
        )),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          //   console.log(message);
          return of({ orderMerchant: null, error: message });
        })
      );
  }
}
