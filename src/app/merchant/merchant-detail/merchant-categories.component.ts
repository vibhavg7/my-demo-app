import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-merchant-categories',
  templateUrl: './merchant-categories.component.html',
  styleUrls: ['./merchant-categories.component.css']
})
export class MerchantCategoriesComponent implements OnInit {

  storeCategories: any;
  storeId: number;
  errorMessage: any;
  pageTitle = 'Store Categories';
  constructor(
    private activatedRoute: ActivatedRoute,
    private merchantService: MerchantService) { }

  ngOnInit(): void {
    this.storeId = +this.activatedRoute.parent.params['_value']['storeId'];
    this.merchantService.fetchStoreCategories(this.storeId).subscribe(
      (data: any) => {
        this.storeCategories = data.store_categories;
        this.storeCategories.forEach(element => {
          element.isEditable = false;
        });
        console.log(this.storeCategories);
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

  editStoreCategoryStatus(storeCategory) {
    this.merchantService.updateStoreCategory(storeCategory).subscribe(
      (data: any) => {
        if (+data.status === 200) {
          const foundIndex = this.storeCategories.findIndex(x => +x.store_category_mapping_id === +storeCategory.store_category_mapping_id);
          this.storeCategories[foundIndex].isEditable = false;
          this.storeCategories[foundIndex].status = +storeCategory.status;

        }
      },
      (err) => {
        this.errorMessage = err;
      }
    );
  }

}
