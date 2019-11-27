import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  storeSubCategoryData: any;
  submitted: boolean;
  storeCategories: any;
  addProductForm: any;
  subCategories: any;
  errorMessage: any;
  subCategoryData: any;
  productId: any;
  constructor(private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService,
    private _productService: ProductService) {
    this.addProductForm = this.formBuilder.group({
      productName: ['',Validators.required],
      storeCategoryName:  ['',Validators.required],
      storeSubCategoryName :  ['',Validators.required],
      subCategoryName:  [''],
      productWeightType:  ['',Validators.required],
      productPrice:  ['',Validators.required],
      productWeight:  ['',Validators.required],
      productCode:  ['',Validators.required],
      productDescription:  ['',Validators.required],
      productRating:  ['',Validators.required],
      status: ['',Validators.required]
    });
  }

  get f() { return this.addProductForm.controls; }

  ngOnInit() {
    this._categoryService.getAllStoreCategory("").subscribe(data => {
      this.storeCategories = data['store_categories'];console.log(this.storeCategories);
      this.productId = this._activatedRoute.snapshot.paramMap.get('id');
      if (this.productId != 0) {
        const productData: any = this._activatedRoute.snapshot.data['productData']['product'];
        this.storeCategoryChange(productData['store_category_id']);        
        this.addProductForm.get('productName').setValue(productData['productName']);
        this.addProductForm.get('storeCategoryName').setValue(productData['storeCategoryName']);
        this.addProductForm.get('productWeightType').setValue(productData['productWeightType']);

        this.addProductForm.get('storeCategoryName').setValue(productData['store_category_id']);
        this.addProductForm.get('storeSubCategoryName').setValue(productData['store_sub_category_id']);
        this.addProductForm.get('subCategoryName').setValue(productData['sub_category_id']);

        this.addProductForm.get('productPrice').setValue(productData['price']);
        this.addProductForm.get('productCode').setValue(productData['productCode']);
        this.addProductForm.get('productWeight').setValue(productData['product_weight']);
        this.addProductForm.get('productDescription').setValue(productData['description']);
        this.addProductForm.get('productRating').setValue(productData['starRating']);
        this.addProductForm.get('status').setValue(productData['available']);
      }
    });

  }

  fetchSubCategories(store_category_id)
  {

  }

  deleteProduct() {
    if (this.productId != 0) {
      if (confirm("Are you sure to delete ")) {
        this._productService.deleteProduct(this.productId).subscribe((data) => {
          console.log(data);
          this._router.navigate(['products']);
        })
      }

    }
  }

  onSubmit() {
    console.log(this.addProductForm.value);
    this.submitted = true;
    if (this.addProductForm.invalid) {
      return;
    }

    if (this.productId == 0) {
      this._productService.createProduct(this.addProductForm.value).subscribe((data) => {
        if (data['status'] == 200) {
          this._router.navigate(['products']);
        }
        else if (data['status'] == 400) {
          alert('Product Not Added . Internal Server Error');
        }

      },
        (error) => {
          console.log(error);
        })
    }
    else {
      // console.log('Hiiiiiiiiiiiiiiii');
      this._productService.updateProduct(this.addProductForm.value, this.productId).subscribe((data) => {
        console.log(data);
        if (data['status'] == 200) {
          this._router.navigate(['products']);
        }
        else if (data['status'] == 400) {
          alert('Product Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        })
    }
  }

  storeCategoryChange(store_category_id) {
    this._categoryService.getStoreCategoryData(+store_category_id).subscribe(data => {
      this.storeSubCategoryData = data['store_categories'][0]['store_sub_category_name'];
      this.subCategoryData = this.storeSubCategoryData[0]['sub_category_data'];
      this.addProductForm.get('storeSubCategoryName').setValue(this.storeSubCategoryData[0]['store_sub_category_id']);
    });
  }

  storeSubCategoryChange(store_sub_category_id)
  {
    console.log('storeSubCategoryChange');
    this.storeSubCategoryData.filter(data=>{
      if(data.store_sub_category_id == store_sub_category_id)
      {
        this.subCategoryData = data['sub_category_data'];
        this.addProductForm.get('subCategoryName').setValue(this.subCategoryData[0]['sub_category_id']);
      }
    })
  }
}
