import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-delivery-person-info',
  templateUrl: './delivery-person-info.component.html',
  styleUrls: ['./delivery-person-info.component.css']
})
export class DeliveryPersonInfoComponent implements OnInit {

  deliveryPersonData: any;
  constructor(private activatedRoute: ActivatedRoute, private deliveryService: DeliveryService) { }
  deliveryId: any = '';
  errorMessage: any = '';

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.deliveryId = +this.activatedRoute.parent.params['_value']['deliveryId'];
    console.log(this.deliveryId);
    this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe((data: any) => {
      if (data.status === 200) {
        this.deliveryPersonData = data.deliveryPersonData;
        console.log(this.deliveryPersonData);
      }
    });
  }

}
