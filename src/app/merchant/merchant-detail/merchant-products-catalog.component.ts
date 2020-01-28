import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, tap, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-merchant-products-catalog',
  templateUrl: './merchant-products-catalog.component.html',
  styleUrls: ['./merchant-products-catalog.component.css']
})
export class MerchantProductsCatalogComponent implements OnInit {

  filterBy: any = '';
  searchCriteriaForm: FormGroup;
  storeId: number;
  currentPage = 1;
  pageSize = 20;
  storeproductsinfo: any = [];
  storeproductscount: any;
  showImage: any = false;
  displaytype: any = 'SP';
  errorMessage: any = '';
  constructor(private merchantService: MerchantService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.storeId = +this.activatedRoute.parent.params['_value']['storeId'];
    this.merchantService.fetchStoreProducts(this.storeId, this.currentPage, this.pageSize, '').subscribe((data: any) => {
      this.storeproductsinfo = data.store_products_info;
      this.storeproductscount = data.store_products_count[0].store_products_count;
      // console.log(this.store_products_info[0]['checked']);
      console.log(this.storeproductscount);
      console.log(this.storeproductsinfo);
    });
    this.onChanges();
  }

  deletestoreproduct(data) {
    console.log(data);
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query,
                this.merchantService.fetchStoreProducts(this.storeId, this.currentPage, this.pageSize, query)))
    ).subscribe(res => { this.storeproductscount = res['store_products_count'][0]['store_products_count'];
                         this.storeproductsinfo = res['store_products_info'];
    });
  }

  currentPageFn(page) {
    // console.log(page);
    this.merchantService.fetchStoreProducts(this.storeId, page, this.pageSize, this.filterBy)
      .subscribe((data: any) => {
        // this.store_products_count = data['store_products_count'][0]['store_products_count'];
        this.storeproductsinfo = data.store_products_info;
        // console.log(this.stores);
      });
  }

}
