import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../products/product.service';
import { MerchantService } from '../merchant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-merchant-product-edit',
  templateUrl: './merchant-product-edit.component.html',
  styleUrls: ['./merchant-product-edit.component.css']
})
export class MerchantProductEditComponent implements OnInit {

  storeId: number;
  errorMessage: any;
  submitted: boolean;
  results: any;
  addStoreProductForm: any;
  selectedProduct: any = '';
  productValueSet: boolean = false;
  storeProductId : any;
  sub: any;
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute:ActivatedRoute,
    private _productService: ProductService,
    private _merchantService: MerchantService
  ) {
    this.addStoreProductForm = this.formBuilder.group({
      storeproductName: ['', Validators.required],
      productMarkedPrice: ['', Validators.required],      
      productCostPrice: ['', Validators.required],
      productSellingPrice: ['', Validators.required],
      storeMargin: ['', Validators.required],
      storeDiscount: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addStoreProductForm.controls; }

  ngOnInit() {    
    this.storeId = +this._activatedRoute.snapshot.params['storeId'];
    this.storeProductId = +this._activatedRoute.snapshot.params['productId'];
    if(this.storeProductId != 0)
    {
      this._merchantService.fetchStoreProductById(this.storeProductId).subscribe((data)=>{
        let productdata = data['products_info'];
        console.log(productdata[0]);
        this.addStoreProductForm.get('storeproductName').setValue(productdata[0]['product_name']);
        this.addStoreProductForm.get('productMarkedPrice').setValue(productdata[0]['product_marked_price']);
        this.addStoreProductForm.get('productCostPrice').setValue(productdata[0]['store_cost_price']);
        this.addStoreProductForm.get('productSellingPrice').setValue(productdata[0]['store_selling_price']);
        this.addStoreProductForm.get('storeMargin').setValue(productdata[0]['store_margin']);
        this.addStoreProductForm.get('storeDiscount').setValue(productdata[0]['store_discount']);
        this.addStoreProductForm.get('status').setValue(productdata[0]['status']);        
      })
    }
    // this.onChanges();

  }

  onChanges() {
    this.addStoreProductForm.get('storeproductName').valueChanges.pipe(tap(data => {
      console.log(data);
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => !this.productValueSet ? (this._productService.searchProducts(query)) : (this.productValueSet = false, of([]))
      ))
    .subscribe(res => { this.results = res; })
  }

  onSubmit() {
    console.log(this.addStoreProductForm.value);
    this.submitted = true;
    if (this.addStoreProductForm.invalid) {
      return;
    }

    if (this.storeProductId == 0) {      
      this._merchantService.addStoreProducts(this.addStoreProductForm.value,this.selectedProduct['product_id'],this.storeId)
      .subscribe((data) => {
        console.log(data);
        if (data.status == 200) {
          this._router.navigate([`merchant/${this.storeId}/merchantproducts`]);
          // this._router.navigate(['merchant/',this.storeId,'/merchantproducts']);
        }
        if (data.status == "400") {
          alert('Category Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
    else
    {
      this._merchantService.editStoreProduct(this.addStoreProductForm.value,this.storeProductId).subscribe((data)=>{
          if (data['status'] == 200) {
            this._router.navigate([`merchant/${this.storeId}/merchantproducts`]);
          }
          if (data['status'] == 400) {
            alert('Category Not Added . Internal Server Error');
          }
      })
    }
    // else {
    //   console.log(this.addStoreProductForm.value);
    //   // this._categoryService.editStoreCategory(this.addStoreCategoryForm.value,this.storeCategoryId);
    //   this._merchantService.editStoreProducts(this.addStoreProductForm.value,this.selectedProduct['product_id'], this.storeProductId)
    //   .subscribe((data) => {
    //     console.log(data);
    //     if (data.status == "200") {
    //       this._router.navigate(['category/storecategories']);
    //     }
    //     if (data.status == "400") {
    //       alert('Category Not Added . Internal Server Error');
    //     }
    //   },
    //     (error) => {
    //       this.errorMessage = error;
    //     })
    // }


  }

  productSelected(product) {
    this.results = [];
    this.productValueSet = true;    
    this.selectedProduct = product;    
    this.addStoreProductForm.get('storeproductName').setValue(this.selectedProduct['product_name']);
  }

}
