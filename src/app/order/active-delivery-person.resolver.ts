import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderService } from './order.service';
import { map, catchError } from 'rxjs/operators';
import { DeliveryService } from '../delivery/delivery.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveDeliveryPersonResolver implements Resolve<any> {

  constructor(private deliveryService: DeliveryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.deliveryService.fetchAllActiveDeliveryPersons()
    .pipe(
      map(deliveryPersonResolver => (
        {
          activeDeliveryPersonInfo: deliveryPersonResolver.delivery,
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
