import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FeedbackService } from './feedback.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackResolverService implements Resolve<any> {

  constructor(private feedBackService: FeedbackService) { }
  pagenumber = 1;
  pagesize = 20;
  filterBy = '';

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.feedBackService.fetchAllFeedBacks(this.pagenumber, this.pagesize, this.filterBy).pipe(
      catchError(err => of(err))
    );
  }
}
