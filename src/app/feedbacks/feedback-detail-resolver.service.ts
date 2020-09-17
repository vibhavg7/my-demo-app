import { Injectable } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDetailResolverService {

  pagenumber = 1;
  pagesize = 20;
  filterBy = '';
  constructor(private feedBackService: FeedbackService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const feedbackId = +route.params.feedbackId;
    return this.feedBackService.fetchFeedBackDetailById(this.pagenumber, this.pagesize, this.filterBy, feedbackId).pipe(
      catchError(err => of(err))
    );
  }
}
