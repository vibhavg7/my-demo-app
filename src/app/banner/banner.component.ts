import { Component, OnInit } from '@angular/core';
import { BannerService } from './banner.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../products/image-upload/image-upload.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  pageTitle: any = 'Banners Dashboard';
  bannerTotalCount: any;
  displaytype: any = 'AM';
  banners: any = [];
  filterBy: any = '';
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.fetchAllBanners(this.currentPage, this.pageSize, '').subscribe((data: any) => {
      console.log(data);
      this.bannerTotalCount = data.banner_total_count.banners_count;
      this.banners = data.banner;
    });
  }

  onChanges() {
    // this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    //   // console.log(data);
    // }), distinctUntilChanged(), debounceTime(200),
    //   switchMap(query => (this.filterBy = query, this._merchantService.fetchAllStores(this.currentPage, this.pageSize, query)))
    // )
    //   .subscribe(res => { this.store_total_count = res['store_total_count']['stores_count']; this.stores = res['store']; })
  }

  currentPageFn(page) {
    this.bannerService.fetchAllBanners(page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        this.bannerTotalCount = data.banner_total_count.banner_count;
        this.banners = data.banner;
      });
  }

}
