import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShopperCategoryComponent } from './shopper-category/shopper-category.component';
import { AddStoreCategoryComponent } from './shopper-category/add-store-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopperCategoryDataComponent } from './shopper-category/shopper-category-data.component';
import { AddSubCategoryComponent } from './shopper-category/add-sub-category.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent, CategoryDetailComponent, ShopperCategoryComponent, AddStoreCategoryComponent, ShopperCategoryDataComponent, AddSubCategoryComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SharedModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
