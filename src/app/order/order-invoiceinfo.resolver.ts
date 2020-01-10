import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderInvoiceInfoResolver implements Resolve<any> {
  constructor(private orderService: OrderService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const orderid = route.parent.params.orderId;
    return this.orderService.fetchOrderDetails(orderid)
      .pipe(
        map(orderinvoiceResolver => (
          { orderInvoice: orderinvoiceResolver.paymentInfo, error: '' }
        )),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          //   console.log(message);
          return of({ orderInvoice: null, error: message });
        })
      );
  }
}
