import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductsResolverService } from './products-resolver.service';
import { CategoryResolverService } from '../category/category-resolver.service';

import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductShellAddComponent } from './product-shell/product-shell-add.component';

const routes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
    // data:{'pageTitle':'Product List'},
    resolve: { products: ProductsResolverService }
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    resolve: { product: ProductResolverService }
  },
  {
    path: ':id/edit',
    component: ProductShellAddComponent,
    // canDeactivate: [ProductEditGuard],
    resolve: { productData: ProductResolverService },
    // , categoryData: CategoryResolverService
    // children: [
    //   { path: '', redirectTo: 'info', pathMatch: 'full' },
    //   { path: 'info', component: ProductEditInfoComponent },
    //   { path: 'tags', component: ProductEditTagsComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
