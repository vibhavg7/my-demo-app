import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from '../../category/category.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-shell-add',
  templateUrl: './product-shell-add.component.html',
  styleUrls: ['./product-shell-add.component.css']
})
export class ProductShellAddComponent implements OnInit {

  productData: any;
  storeSubCategoryData: any;
  submitted: boolean;
  storeCategories: any;
  addProductForm: FormGroup;
  subCategories: any;
  disableForm = false;
  errorMessage: any;
  subCategoryData: any;
  productId: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      storeCategoryName: ['', Validators.required],
      storeSubCategoryName: ['', Validators.required],
      subCategoryName: [''],
      productWeightType: [''],
      productPrice: ['', Validators.required],
      productWeight: [''],
      productCode: ['', Validators.required],
      productDescription: ['', Validators.required],
      productRating: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  get f() { return this.addProductForm.controls; }

  ngOnInit() {
    this.categoryService.getAllStoreCategory('').subscribe((data: any) => {
      this.storeCategories = data.store_categories;
      this.productId = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.productId !== 0) {
        this.productData = this.activatedRoute.snapshot.data.productData.product;
        this.addProductForm.get('storeCategoryName').setValue(this.productData.store_category_id);
        this.addProductForm.get('storeSubCategoryName').setValue(this.productData.store_sub_category_id);
        this.addProductForm.get('subCategoryName').setValue(this.productData.sub_category_id);
        this.addProductForm.get('productName').setValue(this.productData.productName);
        this.addProductForm.get('productPrice').setValue(this.productData.price);
        this.addProductForm.get('productCode').setValue(this.productData.productCode);
        this.addProductForm.get('productWeightType').setValue(this.productData.productWeightType);
        this.addProductForm.get('productWeight').setValue(this.productData.product_weight);
        this.addProductForm.get('productDescription').setValue(this.productData.description);
        this.addProductForm.get('productRating').setValue(this.productData.starRating);
        this.addProductForm.get('status').setValue(this.productData.available);
        this.storeCategoryChange(this.productData.store_category_id, +this.productData.store_sub_category_id);
      }
    });

  }

  deleteProduct() {
    if (this.productId !== 0) {
      if (confirm('Are you sure to delete ')) {
        this.productService.deleteProduct(this.productId).subscribe((data) => {
          console.log(data);
          this.router.navigate(['products']);
        });
      }

    }
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addProductForm.invalid) {
        this.disableForm = false;
        return;
      }

      if (+this.productId === 0) {
        this.productService.createProduct(this.addProductForm.value).subscribe((data: any) => {
          if (data.status === 200) {
            this.router.navigate(['products']);
          } else if (data.status === 400) {
            alert('Product Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.disableForm = false;
            console.log(error);
          });
      } else {
        this.productService.updateProduct(this.addProductForm.value, this.productId).subscribe((data) => {
          console.log(data);
          if (data.status === 200) {
            this.router.navigate(['products']);
          } else if (data.status === 400) {
            alert('Product Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.disableForm = false;
            this.errorMessage = error;
          });
      }
    }
  }

  storeCategoryChange(storecategoryid, storesubcategoryid) {
    this.storeSubCategoryData = []; this.subCategoryData = [];
    this.categoryService.getStoreCategoryData(+storecategoryid).subscribe((data: any) => {
      this.storeSubCategoryData = data.store_categories[0].store_sub_category_name;
      if (+storesubcategoryid === 0) {
        // this.subCategoryData = this.storeSubCategoryData[0].sub_category_data;
      } else {
        this.subCategoryData = this.storeSubCategoryData.filter((d: any) => {
          return d.store_sub_category_id === storesubcategoryid;
        })[0].sub_category_data;
      }
    });
  }

  storeSubCategoryChange(storesubcategoryid) {
    this.storeSubCategoryData.filter((data) => {
      if (data.store_sub_category_id === +storesubcategoryid) {
        this.subCategoryData = data.sub_category_data;
        if (this.subCategoryData.length < 1) {
          this.addProductForm.patchValue({
            subCategoryName: ''
          });
          this.subCategoryData = [];
        }
      }
    });
  }
}
