import { Injectable } from '@angular/core';
import { SubscriptionService } from './subscription.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionResolverService {

  constructor(private subscriptionService: SubscriptionService) {

  }
  pagenumber = 1;
  pagesize = 20;
  filterBy = '';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.subscriptionService.fetchAllSubscriptons(this.pagenumber, this.pagesize, this.filterBy).pipe(
      catchError(err => of(err))
    );
  }
}
