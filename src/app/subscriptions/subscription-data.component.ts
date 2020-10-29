import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-subscription-data]',
  templateUrl: './subscription-data.component.html',
  styleUrls: ['./subscription-data.component.css']
})
export class SubscriptionDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('subscriptionInfo') subscriptionInfo: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.subscriptionInfo);
  }

}
