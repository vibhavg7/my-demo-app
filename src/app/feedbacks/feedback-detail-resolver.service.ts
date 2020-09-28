import { Injectable } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackDetailResolverService {

  constructor(private feedBackService: FeedbackService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const feedbackId = +route.params.feedbackId;
    return this.feedBackService.fetchFeedBackDetailById(feedbackId).pipe(
      catchError(err => of(err))
    );
  }
}
