import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  errorMessage: string;
  subscription: Subscription = new Subscription();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription.add(this.route.data.subscribe((data: any) => this.errorMessage = data['message']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
