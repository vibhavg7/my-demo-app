import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from './order.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusResolver implements Resolve<any> {

  constructor(private orderService: OrderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.orderService.fetchStatusTypes()
    .pipe(
      map(orderStatusResolver => (
        {
          orderStatusTypes: orderStatusResolver.orderStatusTypes,
          deliveryStatusTypes: orderStatusResolver.deliveryStatusTypes,
          merchantStatusTypes: orderStatusResolver.merchantStatusTypes,
          error: '' }
      )),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        //   console.log(message);
        return of({ orderInvoice: null, error: message });
      })
    );
  }
}
