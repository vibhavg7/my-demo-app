import { Component, OnInit } from '@angular/core';
import { MerchantService } from './merchant.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationServiceService } from '../shared/location-service.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-merchant-edit',
  templateUrl: './merchant-edit.component.html',
  styleUrls: ['./merchant-edit.component.css']
})
export class MerchantEditComponent implements OnInit {

  storeCategories: any;
  errorMessage: any;
  submitted: boolean;
  timeArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0
  ];
  addStoreForm: any;
  storeId: any;
  constructor(
    private merchantService: MerchantService,
    private locationService: LocationServiceService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.addStoreForm = this.formBuilder.group({
      storeName: ['', Validators.required],
      openingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
      storeCategoryName: ['', Validators.required],
      storeEmail: ['', Validators.required],
      storePhoneNumber: ['', Validators.required],
      storeAlternateNumber: [''],
      storeLandlineNumber: [''],
      country: [''],
      storeLatitude: ['', Validators.required],
      storeLongitude: ['', Validators.required],
      state: [''],
      city: [''],
      storeGSTNumber: ['', Validators.required],
      storePANNumber: ['', Validators.required],
      storeAddress: ['', Validators.required],
      pinCode: ['', Validators.required],
      storeDescription: ['', Validators.required],
      storeRating: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addStoreForm.controls; }

  ngOnInit() {
    this.storeId = +this.activatedRoute.snapshot.params.storeId;
    if (this.storeId !== 0) {
      this.merchantService.storeDataCatData(this.storeId).subscribe(responseList => {
        const storedata: any = responseList[0].store;
        this.addStoreForm.get('storeAddress').setValue(storedata[0].address);
        this.addStoreForm.get('storeAlternateNumber').setValue(storedata[0].alternative_number);

        this.addStoreForm.get('openingTime').setValue(storedata[0].store_opening_time);
        this.addStoreForm.get('closingTime').setValue(storedata[0].store_closing_time);

        this.addStoreForm.get('storePhoneNumber').setValue(storedata[0].phone_number);
        this.addStoreForm.get('storeLandlineNumber').setValue(storedata[0].landline_number);
        this.addStoreForm.get('status').setValue(storedata[0].status);
        this.addStoreForm.get('country').setValue(storedata[0].country);
        this.addStoreForm.get('state').setValue(storedata[0].state);
        this.addStoreForm.get('city').setValue(storedata[0].city);
        this.addStoreForm.get('storeName').setValue(storedata[0].store_name);
        this.addStoreForm.get('storeEmail').setValue(storedata[0].store_email);

        this.addStoreForm.get('storeGSTNumber').setValue(storedata[0].gst_number);
        this.addStoreForm.get('storePANNumber').setValue(storedata[0].pan_number);
        this.addStoreForm.get('pinCode').setValue(storedata[0].pin_code);
        this.addStoreForm.get('storeLatitude').setValue(storedata[0].latitude);
        this.addStoreForm.get('storeLongitude').setValue(storedata[0].longitude);
        this.addStoreForm.get('storeDescription').setValue(storedata[0].store_description);
        this.addStoreForm.get('storeRating').setValue(storedata[0].store_rating);
        this.addStoreForm.get('storeCategoryName').setValue(storedata[0].store_parent_category);
        this.storeCategories = responseList[1].store_categories;
      });
    } else {
      this.categoryService.getAllStoreCategory('').subscribe((data: any) => {
        this.storeCategories = data.store_categories;
      });
    }

    this.locationService.getPosition().then(pos => {
      // console.log(`Positon: ${pos.lng} ${pos.lat}`);
      this.addStoreForm.patchValue({
        storeLatitude: pos.lat,
        storeLongitude: pos.lng
      });
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addStoreForm.invalid) {
      return;
    }
    // console.log(this.addStoreForm.value);
    // console.log(this.storeId);

    if (this.storeId === 0) {
      this.merchantService.addNewStore(this.addStoreForm.value).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['merchant']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Merchant Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    } else {
      // console.log('Hiiiiiiiiiiiiiiii');
      this.merchantService.editStore(this.addStoreForm.value, this.storeId).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['merchant']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Merchant Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    }

  }

}
