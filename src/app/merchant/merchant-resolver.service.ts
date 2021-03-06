import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MerchantService } from './merchant.service';
import { ErrorTracker } from '../shared/errorTracker';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MerchantResolverService implements Resolve<any> {
  constructor(private merchantService: MerchantService) {

  }
  pagenumber = 1;
  pagesize = 20;
  filterBy = '';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.merchantService.fetchAllStores(this.pagenumber, this.pagesize, this.filterBy).pipe(
      catchError(err => of(err))
    );
  }
}
