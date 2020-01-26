import { Component, OnInit } from '@angular/core';
import { DeliveryService } from './delivery.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delivery-edit',
  templateUrl: './delivery-edit.component.html',
  styleUrls: ['./delivery-edit.component.css']
})
export class DeliveryEditComponent implements OnInit {

  errorMessage: any;
  submitted: boolean;
  addDeliveryPersonForm: FormGroup;
  deliveryId: any;
  constructor(
    private formBuilder: FormBuilder,
    private deliveryService: DeliveryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addDeliveryPersonForm = this.formBuilder.group({
      deliveryPersonName: ['', Validators.required],
      aadharNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addDeliveryPersonForm.controls; }

  ngOnInit() {
    this.deliveryId = +this.activatedRoute.snapshot.params.deliveryId;
    if (this.deliveryId !== 0) {
      this.deliveryService.fetchDeliveryPersonDetails(this.deliveryId).subscribe((data: any) => {
        const deliveryPersonData: any = data.deliveryPersonData;
        console.log(deliveryPersonData);
        this.addDeliveryPersonForm.get('deliveryPersonName').setValue(deliveryPersonData.delivery_person_name);
        this.addDeliveryPersonForm.get('aadharNumber').setValue(deliveryPersonData.aadhar_number);
        this.addDeliveryPersonForm.get('status').setValue(deliveryPersonData.status);
        this.addDeliveryPersonForm.get('panNumber').setValue(deliveryPersonData.pan_number);
        this.addDeliveryPersonForm.get('email').setValue(deliveryPersonData.email);
        this.addDeliveryPersonForm.get('phone').setValue(deliveryPersonData.phone);
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.addDeliveryPersonForm.invalid) {
      return;
    }
    // tslint:disable-next-line:triple-equals
    if (this.deliveryId == '') {
      this.deliveryService.addNewDeliveryPerson(this.addDeliveryPersonForm.value).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['delivery']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Delivery Person Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    } else {
      this.deliveryService.editDeliveryPerson(this.addDeliveryPersonForm.value, this.deliveryId).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['delivery']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Delivery Person Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    }

  }

}
