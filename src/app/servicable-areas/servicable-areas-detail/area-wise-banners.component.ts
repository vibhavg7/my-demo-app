import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';

@Component({
  selector: 'app-area-wise-banners',
  templateUrl: './area-wise-banners.component.html',
  styleUrls: ['./area-wise-banners.component.css']
})
export class AreaWiseBannersComponent implements OnInit {

  deliveryAreaBannerData: any;
  pageTitle: any = 'Areawise Banners';
  areaId: number;
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  constructor(private activatedRoute: ActivatedRoute,
              private servicableAreasService: ServicableAreasService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.areaId = +this.activatedRoute.parent.params['_value']['areaId'];
    this.servicableAreasService.fetchAllDeliveryBannersById(this.areaId, this.currentPage, this.pageSize, '').subscribe((data: any) => {
      this.deliveryAreaBannerData = data.bannerData;
    });
  }

  currentPageFn(page) {
    this.servicableAreasService.fetchAllDeliveryBannersById(this.areaId, page, this.pageSize, '').subscribe((data: any) => {
      this.deliveryAreaBannerData = data.bannerData;
    });
  }

}
