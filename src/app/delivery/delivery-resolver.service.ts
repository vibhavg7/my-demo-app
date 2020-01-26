import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DeliveryService } from './delivery.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryResolverService implements Resolve<any> {

  constructor(private deliveryService: DeliveryService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.deliveryService.fetchAllDeliveryPersons(1, 20, '')
      .pipe(
        map((deliveryResolver: any) => (
            // console.log(deliveryResolver),
          { deliverypersons: deliveryResolver.delivery,
            customer_total_count: deliveryResolver.delivery_total_count.deliveryperson_count, error: '' })
        ),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          return of({ deliverypersons: null, error: message });
        })
      );
  }
}
