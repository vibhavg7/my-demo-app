import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-feedback-data]',
  templateUrl: './feedback-data.component.html',
  styleUrls: ['./feedback-data.component.css']
})
export class FeedbackDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('feedBackInfo') feedBackInfo: any;
  constructor() { }

  ngOnInit() {
    // console.log(this.feedBackInfo);
  }

}
