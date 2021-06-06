import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderService } from './order.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MerchantService } from '../merchant/merchant.service';

@Injectable({
  providedIn: 'root'
})
export class OrderCustomerInfoResolver implements Resolve<any> {
  constructor(private merchantService: MerchantService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const orderid = route.parent.params.orderId;
    return this.merchantService.fetchOrderDetails(orderid)
      .pipe(
        map(ordercustomerResolver => (
          console.log(ordercustomerResolver),
          { orderCustomer: ordercustomerResolver.customerInfo, error: '' }
        )),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          //   console.log(message);
          return of({ orderCustomer: null, error: message });
        })
      );
  }
}
