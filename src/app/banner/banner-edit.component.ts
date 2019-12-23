import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  errorMessage: any;
  submitted: boolean;
  addBannerForm: FormGroup;
  bannerId: any;
  constructor(
    private formBuilder: FormBuilder,
    private bannerService: BannerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.addBannerForm = this.formBuilder.group({
      bannerName: ['', Validators.required],
      zipCode: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addBannerForm.controls; }

  ngOnInit() {
    this.bannerId = +this.activatedRoute.snapshot.params.bannerId;
    if (this.bannerId !== 0) {
      this.bannerService.fetchBannerDetails(this.bannerId).subscribe((data: any) => {
        const bannerData: any = data.banner;
        console.log(bannerData);
        this.addBannerForm.get('bannerName').setValue(bannerData.banner_name);
        this.addBannerForm.get('zipCode').setValue(bannerData.zipcode);
        this.addBannerForm.get('status').setValue(bannerData.status);
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.addBannerForm.invalid) {
      return;
    }
    // tslint:disable-next-line:triple-equals
    if (this.bannerId == '') {
      this.bannerService.addNewBanner(this.addBannerForm.value).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['banner']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Banner Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    } else {
      this.bannerService.editBanner(this.addBannerForm.value, this.bannerId).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['banner']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('Banner Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    }

  }

}
