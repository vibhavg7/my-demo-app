import { Component, OnInit } from '@angular/core';
import { ServicableAreasService } from './servicable-areas-service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-servicable-areas-dashboard',
  templateUrl: './servicable-areas-dashboard.component.html',
  styleUrls: ['./servicable-areas-dashboard.component.css']
})
export class ServicableAreasDashboardComponent implements OnInit {
  pageTitle: any = 'Delivery Areas Dashboard';
  searchCriteriaForm: FormGroup;
  totaldeliveryareascount: any;
  deliveryareas: any;
  errorMessage: any;
  constructor(private servicableAreasService: ServicableAreasService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
        this.searchCriteriaForm = this.formBuilder.group({
          searchCriteria: ['']
        });
              }

  ngOnInit() {
    this.deliveryareas = this.activatedRoute.snapshot.data.serviceareas.deliveryareas;
    this.totaldeliveryareascount = this.activatedRoute.snapshot.data.serviceareas.deliveryareas_total_count;
  }

}
