import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverService implements Resolve<any> {

  constructor(private orderService: OrderService) {

  }
  pagenumber = 1;
  pagesize = 20;
  filterBy = '';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.orderService.fetchAllOrders(this.pagenumber, this.pagesize, this.filterBy).pipe(
      catchError(err => of(err))
    );
  }
}
