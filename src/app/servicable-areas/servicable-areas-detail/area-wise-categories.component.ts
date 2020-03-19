import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';

@Component({
  selector: 'app-area-wise-categories',
  templateUrl: './area-wise-categories.component.html',
  styleUrls: ['./area-wise-categories.component.css']
})
export class AreaWiseCategoriesComponent implements OnInit {

  deliveryAreaCategoriesData: any;
  pageTitle: any = 'Areawise Categories';
  areaId: number;
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  constructor(private activatedRoute: ActivatedRoute,
              private servicableAreasService: ServicableAreasService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.areaId = +this.activatedRoute.parent.params['_value']['areaId'];
    this.servicableAreasService.fetchAllCategoriesById(this.areaId, this.currentPage, this.pageSize, '').subscribe((data: any) => {
      this.deliveryAreaCategoriesData = data.categoryData;
    });
  }

  currentPageFn(page) {
    this.servicableAreasService.fetchAllCategoriesById(this.areaId, page, this.pageSize, '').subscribe((data: any) => {
      this.deliveryAreaCategoriesData = data.categoryData;
    });
  }

}
