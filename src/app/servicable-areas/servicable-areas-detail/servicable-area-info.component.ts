import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';

@Component({
  selector: 'app-servicable-area-info',
  templateUrl: './servicable-area-info.component.html',
  styleUrls: ['./servicable-area-info.component.css']
})
export class ServicableAreaInfoComponent implements OnInit {

  deliveryAreaData: any;
  areaId: number;
  errorMessage: any;
  constructor(private activatedRoute: ActivatedRoute,
              private servicableAreasService: ServicableAreasService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.areaId = +this.activatedRoute.parent.params['_value']['areaId'];
    console.log(this.areaId);
    this.servicableAreasService.fetchDeliveryAreaById(this.areaId).subscribe((data: any) => {
      this.deliveryAreaData = data.deliveryArea;
      console.log(this.deliveryAreaData);
    });
  }

}
