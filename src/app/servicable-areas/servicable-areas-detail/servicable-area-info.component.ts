import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicable-area-info',
  templateUrl: './servicable-area-info.component.html',
  styleUrls: ['./servicable-area-info.component.css']
})
export class ServicableAreaInfoComponent implements OnInit {

  deliveryAreaData: any;
  areaId: number;
  errorMessage: any;
  model: any;
  editclosingTime = false;
  starttime = {hour: 0o0, minute: 0o0};
  endtime = {hour: 11, minute: 59};
  meridian = true;
  timeAvailable = false;
  // hourStep = 1;
  // minuteStep = 15;
  // secondStep = 30;

  // form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder,
              // private calendar: NgbCalendar,
              private servicableAreasService: ServicableAreasService) {
    // this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
    // this.toDate = calendar.getToday();
    // this.form = this.fb.group({
    //   time: [this.time, Validators.required],
    // });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.areaId = +this.activatedRoute.parent.params['_value']['areaId'];
    this.servicableAreasService.fetchDeliveryAreaById(this.areaId).subscribe((data: any) => {
      this.deliveryAreaData = data.deliveryArea;
      this.timeAvailable = this.deliveryAreaData.opening_time && this.deliveryAreaData.closing_time ? true : false;
      console.log(this.timeAvailable);
    });
  }

  changeDeliveryAreaOpeningClosingTime() {
    this.editclosingTime = true;
    if (this.timeAvailable) {
      const starttime = this.deliveryAreaData.opening_time.split(':');
      const endtime = this.deliveryAreaData.closing_time.split(':');
      this.starttime.hour = +starttime[0];
      this.endtime.hour = +endtime[0];
      this.starttime.minute = +starttime[1];
      this.endtime.minute = +endtime[1];
      console.log(starttime);
      console.log(endtime);
    }
  }

  cancel() {
    this.editclosingTime = false;
  }

  saveOpeningClosingTime() {
    if (confirm('Are you sure you want to save the time ')) {

      this.servicableAreasService.updateDeliveryAreaOpeningClosingTime(this.areaId, this.starttime, this.endtime)
      .subscribe((data: any) => {
        if (data.status === 200) {
          alert(data.message);
          this.editclosingTime = false;
          this.deliveryAreaData = data.deliveryareaData[0];
        }
      });
    }
  }
}
