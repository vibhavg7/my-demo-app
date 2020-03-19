import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-area-wise-banner-edit',
  templateUrl: './area-wise-banner-edit.component.html',
  styleUrls: ['./area-wise-banner-edit.component.css']
})
export class AreaWiseBannerEditComponent implements OnInit {

  errorMessage: any;
  submitted: boolean;
  selectedBanner: any;
  results: any;
  bannerValueSet: boolean;
  areabannerId: number;
  areaId: number;
  addAreaWiseBannerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicableAreasService: ServicableAreasService
  ) {
    this.addAreaWiseBannerForm = this.formBuilder.group({
      bannerName: ['', Validators.required],
      bannerText: ['', Validators.required],
      status: ['']
    });
   }

   get f() { return this.addAreaWiseBannerForm.controls; }

  ngOnInit() {
    this.areaId = +this.activatedRoute.snapshot.params.areaId;
    this.areabannerId = +this.activatedRoute.snapshot.params.areabannerId;
    if (this.areabannerId !== 0 && this.areaId !== 0) {
      this.servicableAreasService.fetchDeliveryBannersById(this.areabannerId).subscribe((data: any) => {
        const bannerdata = data.bannerData;
        console.log(bannerdata[0]);
        this.addAreaWiseBannerForm.get('bannerName').setValue(bannerdata[0].banner_name);
        this.addAreaWiseBannerForm.get('bannerText').setValue(bannerdata[0].banner_text);
        this.addAreaWiseBannerForm.get('status').setValue(bannerdata[0].status);
      });
    }
  }

  onChanges() {
    this.bannerValueSet = false;
    this.addAreaWiseBannerForm.get('bannerName').valueChanges.pipe(tap(data => {
      console.log(data);
    }), distinctUntilChanged(), debounceTime(200),
      switchMap((query) => {
        if (!this.bannerValueSet) {
          return this.servicableAreasService.searchAreaWiseBanners(query);
        } else {
          this.bannerValueSet = true;
          return of([]);
        }
      }))
      .subscribe((res: any) => { this.results = res.bannerData; });
  }

  bannerSelected(banner) {
    console.log(banner);
    this.results = [];
    this.bannerValueSet = true;
    this.selectedBanner = banner;
    this.addAreaWiseBannerForm.get('bannerName').setValue(this.selectedBanner.banner_name);
  }

  onSubmit() {
    this.submitted = true;
    if (this.addAreaWiseBannerForm.invalid) {
      return;
    }

    if (this.areabannerId === 0) {
      this.servicableAreasService.addAreaWiseBanner(this.addAreaWiseBannerForm.value, this.selectedBanner, this.areaId)
        .subscribe((data: any) => {
          console.log(data);
          if (data.status === 200) {
            this.router.navigate([`servicableareas/${this.areaId}/banners`]);
          }
          if (data.status === 400) {
            alert('Category Not Added . Internal Server Error');
          }
        },
          (error) => {
            this.errorMessage = error;
          }
        );
    } else {

      if (this.selectedBanner !== undefined) {
        this.servicableAreasService.addAreaWiseBanner(this.addAreaWiseBannerForm.value, this.selectedBanner, this.areaId)
        .subscribe((data: any) => {
          console.log(data);
          if (data.status === 200) {
            this.router.navigate([`servicableareas/${this.areaId}/banners`]);
          }
          if (data.status === 400) {
            alert('Category Not Added . Internal Server Error');
          }
        },
          (error) => {
            this.errorMessage = error;
          }
        );
      } else  {
      this.servicableAreasService.editAreWiseBanner(this.addAreaWiseBannerForm.value, this.areabannerId)
      .subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.router.navigate([`servicableareas/${this.areaId}/banners`]);
        }
        if (data.status === 400) {
          alert('Category Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        }
      );
      }

    }
  }
}
