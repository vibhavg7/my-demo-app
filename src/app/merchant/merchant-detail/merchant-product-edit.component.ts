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
  productValueSet = false;
  disableForm = false;
  storeProductId: any;
  sub: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private merchantService: MerchantService
  ) {
    this.addStoreProductForm = this.formBuilder.group({
      storeproductName: ['', Validators.required],
      productMarkedPrice: ['', Validators.required],
      productSellingPrice: ['', Validators.required],
      storeMargin: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addStoreProductForm.controls; }

  ngOnInit() {
    this.storeId = +this.activatedRoute.snapshot.params.storeId;
    this.storeProductId = +this.activatedRoute.snapshot.params.productId;
    if (this.storeProductId !== 0) {
      this.merchantService.fetchStoreProductById(this.storeProductId).subscribe((data: any) => {
        const productdata = data.products_info;
        console.log(productdata[0]);
        this.addStoreProductForm.get('storeproductName').setValue(productdata[0].product_name);
        this.addStoreProductForm.get('productMarkedPrice').setValue(productdata[0].product_marked_price);
        this.addStoreProductForm.get('productSellingPrice').setValue(productdata[0].store_selling_price);
        this.addStoreProductForm.get('storeMargin').setValue(productdata[0].store_margin);
        this.addStoreProductForm.get('status').setValue(productdata[0].status);
      });
    }
  }

  onChanges() {
    this.productValueSet = false;
    this.addStoreProductForm.get('storeproductName').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(1000),
      switchMap((query) => {
        console.log(query);
        if (!this.productValueSet) {
          return this.productService.searchProducts(query);
        } else {
          this.productValueSet = true;
          return of([]);
        }
      }))
      .subscribe(res => { this.results = res; console.log(this.results); });
  }

  onSubmit() {
    this.submitted = true;
    this.disableForm = true;
    if (this.addStoreProductForm.invalid) {
      this.disableForm = false;
      return;
    }

    if (this.storeProductId === 0) {
      this.merchantService.addStoreProducts(this.addStoreProductForm.value, this.selectedProduct, this.storeId)
        .subscribe((data) => {
          console.log(data);
          if (data.status === 200) {
            this.router.navigate([`merchant/${this.storeId}/merchantproducts`]);
            this.disableForm = false;
          }
          if (data.status === 400) {
            alert('Category Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          }
        );
    } else {
      this.merchantService.editStoreProduct(this.addStoreProductForm.value, this.storeProductId).subscribe((data: any) => {
        if (data.status === 200) {
          this.router.navigate([`merchant/${this.storeId}/merchantproducts`]);
          this.disableForm = false;
        }
        if (data.status === 400) {
          alert('Category Not Added . Internal Server Error');
          this.disableForm = false;
        }
      }, (error) => {
        this.errorMessage = error;
        this.disableForm = false;
      });
    }

  }

  productSelected(product) {
    console.log(product);
    this.results = [];
    this.productValueSet = true;
    this.selectedProduct = product;
    this.addStoreProductForm.get('storeproductName').setValue(this.selectedProduct.product_name);
    this.addStoreProductForm.get('productMarkedPrice').setValue(this.selectedProduct.product_price);
  }

}
