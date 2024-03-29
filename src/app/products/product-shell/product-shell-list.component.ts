import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
@Component({
  selector: 'app-product-shell-list',
  templateUrl: './product-shell-list.component.html',
  styleUrls: ['./product-shell-list.component.css']
})
export class ProductShellListComponent implements OnInit, OnDestroy {

  filterBy: any = '';
  searchCriteriaForm: FormGroup;
  constructor(private _productService: ProductService,
    private router: Router, private formBuilder: FormBuilder,
    private store: Store<fromProduct.State>,
    private _activatedRoute: ActivatedRoute) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  products: IProduct[];
  pageTitle: string = "Products Listing";
  errorMessage: any;
  selectedProduct: IProduct | null;
  sub: Subscription;
  productsCount: number = 0;
  totalPages: number;
  Pages: any = [];
  currentPage: any;
  pageSize: number = 20;
  displayCode: boolean;
  ngOnInit() {
    this.currentPage = 1;
    this.sub = this._productService.selectProductChanges$.subscribe((data) => {
      this.selectedProduct = data;
    });

    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe((data) => {
      this.displayCode = data;
    });

    const productsData = this._activatedRoute.snapshot.data['products']['product'];
    this.productsCount = +this._activatedRoute.snapshot.data['products']['product_total_count'];
    this.onProductRetrieved(productsData);
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
      console.log(data);
    }), distinctUntilChanged(), debounceTime(2000),
      // tslint:disable-next-line:max-line-length
      switchMap(query => (this.filterBy = query, console.log(this.filterBy), this._productService.getProducts(this.currentPage, this.pageSize, this.filterBy)))
    )
      // console.log(res);
      .subscribe(res => { this.onProductRetrieved(res['products']), this.productsCount = res['productCount']; })
  }

  currentPageFn(page) {
    this.currentPage = page;
    this._productService.getProducts(this.currentPage, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.onProductRetrieved(data['products']);
      });
  }

  checkChanged(value) {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: value
    });
  }


  onSelected(product) {
    this._productService.changeSelectedProduct(product.productId);
  }

  onProductRetrieved(productsData) {
    this.products = productsData;
  }

  addProduct() {
    this.router.navigate(['products', '0', 'edit']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
