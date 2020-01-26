import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrls: ['./delivery-dashboard.component.css']
})
export class DeliveryDashboardComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  deliverypersons_total_count: any;
  deliverypersons: any;
  searchCriteriaForm: FormGroup;
  pageTitle: any = 'Delivery Dashboard';
  filterBy: any = '';
  currentPage = 1;
  errorMessage = '';
  pageSize = 20;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  constructor(
    private deliveryService: DeliveryService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    this.deliverypersons = this.activatedRoute.snapshot.data.deliverypersons.deliverypersons;
    // console.log(this.deliverypersons);
    this.deliverypersons_total_count = this.activatedRoute.snapshot.data.deliverypersons.deliverypersons_total_count;
  }

}
