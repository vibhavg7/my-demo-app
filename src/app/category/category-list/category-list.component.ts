import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  products: any;
  errorMessage: any;
  categories: any;
  storeSubCategoryData: any;
  imageWidth: number = 50;
  imageMargin: number = 2;
  subCategories: any = [];
  storeCategoryId: any;
  pageTitle: any = '';
  displaytype: any = 'AC';
  filterBy: any = '';
  constructor(private _categoryService: CategoryService, private _productService: ProductService,
    private _activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private route: Router) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    this.categories = this._activatedRoute.snapshot.data['storesubcategorydata']['storesubcategorydata'][0];
    this.storeSubCategoryData = this.categories['store_sub_category_name'];
    this.storeSubCategoryData.map(function (o) {
      o.isActive = false;
      return o;
    })
    console.log(this.storeSubCategoryData);
    this.pageTitle = `${this.categories['main_category']} Sub Category`;
    this.errorMessage = this._activatedRoute.snapshot.data['storesubcategorydata']['error'];

    this.onChanges();
  }

  activesubcategory(id) {
    this.storeSubCategoryData.map(function (o) {
      if (o.store_sub_category_id == id) {
        o.isActive = !o.isActive;
      }
    })
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this._categoryService.getStoreSubCategoryData(this.storeCategoryId, this.filterBy)))
    )
      .subscribe(res => { console.log(res); this.categories = res['store_sub_categories'] })
  }

  addNewCategory() {
    this.route.navigate(['category', 0, 'edit']);
  }

  deleteStoreSubCategory(category_id) {
    if (confirm("Are you sure to delete ")) {
      this._categoryService.deleteStoreSubCategory(category_id).subscribe((data) => {
        console.log(data);
        for (var i = 0; i < this.storeSubCategoryData.length; i++) {
          if (this.storeSubCategoryData[i].store_sub_category_id === +data['store_sub_category_id']) {
            console.log(this.categories['store_sub_category_name'][i])
            this.categories['store_sub_category_name'].splice(i, 1);
          }
        }
      })
    }
  }

  deleteSubCategory(sub_category_id, store_sub_category_id) {
    if (confirm("Are you sure to delete ")) {
      console.log(sub_category_id + "---" + store_sub_category_id);
      this._categoryService.deleteSubCategory(sub_category_id).subscribe((data) => {
        if (data.status == 200) {
          this.storeSubCategoryData.map(storesubcat => {
            if (storesubcat.store_sub_category_id == store_sub_category_id) {
              let index = storesubcat.sub_category_data.findIndex(x => x.sub_category_id == sub_category_id);
              storesubcat.sub_category_data.splice(index, 1);
            }
          })
        }
      })
    }
  }

  addSubCat(store_sub_category_id,sub_category_id)
  {
    let category_id = this._activatedRoute.snapshot.params['id'];
    // [routerLink]="['storesub',0,'edit']"
    this.route.navigate([`category/storesubcategories/${category_id}/storesub/${store_sub_category_id}/sub/${sub_category_id}/edit`]);
    // this.route.navigate(['category', 0, 'edit']);
  }

  getAllProducts() {
    this._productService.getProducts(1, 25, "").subscribe({
      next: p => {
        this.products = p['products'];
        this.products = this.products;
        console.log(this.products);
      },
      error: err => this.errorMessage = err
    });
  }

  categoryProductInfo(category_id) {
    console.log("hello" + category_id);
    this._productService.getcategoryProductInfo(category_id).subscribe({
      next: cp => {
        this.products = cp['products'];
        console.log(this.products);
      },
      error: err => this.errorMessage = err
    });
  }

  showSubCategories(mainCategory) {
    this.subCategories = mainCategory.sub_categories;
    console.log(this.subCategories);
  }

}
