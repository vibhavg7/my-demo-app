import { Injectable } from '@angular/core';
import { OrderService } from './order.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MerchantService } from '../merchant/merchant.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverService implements Resolve<any> {

  constructor(private merchantService: MerchantService) {

  }
  pagenumber = 1;
  pagesize = 20;
  filterBy = '';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.merchantService.fetchAllStoreOrders('', this.pagenumber, this.pagesize, '').pipe(
      catchError(err => of(err))
    );
  }
}
