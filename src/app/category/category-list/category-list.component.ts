import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  subCategories: any = [];
  storeCategoryId: any;
  pageTitle: any = '';
  displaytype: any = 'AC';
  filterBy: any = '';
  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private route: Router) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  ngOnInit() {
    this.categories = this.activatedRoute.snapshot.data.storesubcategorydata.storesubcategorydata[0];
    this.storeSubCategoryData = this.categories.store_sub_category_name;
    this.storeSubCategoryData.map( (o) => {
      o.isActive = false;
      return o;
    });
    console.log(this.storeSubCategoryData);
    this.pageTitle = `${this.categories.main_category} Sub Category`;
    this.errorMessage = this.activatedRoute.snapshot.data.storesubcategorydata.error;

    // this.onChanges();
  }

  activesubcategory(id) {
    this.storeSubCategoryData.map((o) => {
      if (o.store_sub_category_id === id) {
        o.isActive = !o.isActive;
      }
    })
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.categoryService.getStoreSubCategoryData(this.storeCategoryId, this.filterBy)))
    )
      .subscribe((res: any) => { console.log(res); this.categories = res.store_sub_categories; });
  }

  addNewCategory() {
    this.route.navigate(['category', 0, 'edit']);
  }

  deleteStoreSubCategory(categoryId) {
    if (confirm('Are you sure to delete ')) {
      this.categoryService.deleteStoreSubCategory(categoryId).subscribe((data) => {
        console.log(data);
        for (let i = 0; i < this.storeSubCategoryData.length; i++) {
          if (this.storeSubCategoryData[i].store_sub_category_id === +data.store_sub_category_id) {
            this.categories.store_sub_category_name.splice(i, 1);
          }
        }
      })
    }
  }

  deleteSubCategory(subcategoryid, storesubcategoryid) {
    if (confirm('Are you sure to delete ')) {
      this.categoryService.deleteSubCategory(subcategoryid).subscribe((data) => {
        if (data.status === 200) {
          this.storeSubCategoryData.map(storesubcat => {
            if (storesubcat.store_sub_category_id === storesubcategoryid) {
              const index = storesubcat.sub_category_data.findIndex(x => x.sub_category_id === subcategoryid);
              storesubcat.sub_category_data.splice(index, 1);
            }
          });
        }
      });
    }
  }

  addSubCat(storesubcategoryid, subcategoryid) {
    const categoryid = this.activatedRoute.snapshot.params.id;
    this.route.navigate([`category/storesubcategories/${categoryid}/storesub/${storesubcategoryid}/sub/${subcategoryid}/edit`]);
  }

  getAllProducts() {
    this.productService.getProducts(1, 25, '').subscribe({
      next: p => {
        this.products = p.products;
        this.products = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  categoryProductInfo(categoryid) {
    this.productService.getcategoryProductInfo(categoryid).subscribe({
      next: cp => {
        this.products = cp.products;
        console.log(this.products);
      },
      error: err => this.errorMessage = err
    });
  }

  showSubCategories(mainCategory) {
    this.subCategories = mainCategory.sub_categories;
    console.log(this.subCategories);
  }

  uploadImage(categoryid: any) {
    const modalRef: any = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance.title = 'Image Upload';
    modalRef.componentInstance.id = categoryid;
    modalRef.componentInstance.image_type = 'subcategories';
    modalRef.componentInstance.productImage.subscribe((data) => {
      console.log(data);
      // this.merchantData['image_url'] = data['image_url'];
      // this.merchantData.filter((cat) => cat['store_id'] == data['store_id'])['image_url'] = data['image_url'];
      // console.log(this.storeCategories);
    });
  }

}
