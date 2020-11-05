import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-subscription-data]',
  templateUrl: './subscription-data.component.html',
  styleUrls: ['./subscription-data.component.css']
})
export class SubscriptionDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('subscriptionInfo') subscriptionInfo: any;
  // tslint:disable-next-line:no-output-rename
  @Output('checkIfAllSelected') checkIfAllSelected =  new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.subscriptionInfo);
  }

  checkIfAllSelect(customerId) {
    console.log(customerId);
    this.checkIfAllSelected.emit(customerId);
  }

}
