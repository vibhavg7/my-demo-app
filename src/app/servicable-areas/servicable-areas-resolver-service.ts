import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServicableAreasService } from './servicable-areas-service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicableAreasResolverService implements Resolve<any> {

  constructor(private servicableAreasService: ServicableAreasService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.servicableAreasService.fetchAllDeliveryAreas(1, 20, '')
    .pipe(
      map(deliveryAreasResolver => (
        { deliveryareas: deliveryAreasResolver.deliveryareas,
          deliveryareas_total_count: deliveryAreasResolver.deliveryareas_total_count.deliveryareas_count, error: '' })
      ),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        return of({ customers: null, error: message });
      })
    );
  }
}
