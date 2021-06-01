import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit, OnDestroy {

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
