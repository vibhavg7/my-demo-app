import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  categoryId: number;
  errorMessage: any;
  disableForm = false;
  submitted: boolean;
  addSubCategoryForm: FormGroup;
  subcategoryId: any;
  storesubcategoryId: any;
  storeSubCategories:any;
  constructor(
    private _categoryService: CategoryService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.addSubCategoryForm = this.formBuilder.group({
      subcategoryName: ['', Validators.required],
      subcategoryId :[''],
      storeCategoryName: ['', Validators.required],
    });
  }

  get f() { return this.addSubCategoryForm.controls; }

  ngOnInit() {
    this.categoryId = +this._activatedRoute.snapshot.params['categoryId'];
    this.subcategoryId = +this._activatedRoute.snapshot.params['subcategory'];
    this.storesubcategoryId = +this._activatedRoute.snapshot.params['storesubcat'];console.log(this.storesubcategoryId)

    if (this.subcategoryId !== 0) {
      this._categoryService.getSubCategoryData(this.subcategoryId).subscribe((data) => {
        this.addSubCategoryForm.get('subcategoryName').setValue(data[0]['name']);
        this.addSubCategoryForm.get('subcategoryId').setValue(data[0]['category_id']);
      });
    }
    this._categoryService.getStoreSubCategoryData(this.categoryId,"").subscribe((data) => {
      this.storeSubCategories = data['store_categories'][0]['store_sub_category_name'];
      this.addSubCategoryForm.get('storeCategoryName').setValue(this.storesubcategoryId);
    });
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addSubCategoryForm.invalid) {
        this.disableForm = false;
        return;
      }
      if (+this.subcategoryId === 0) {
        this._categoryService.addNewSubCategory(this.addSubCategoryForm.value).subscribe((data: any) => {
          if (+data.status === 200) {
            this._router.navigate(['category/storesubcategories', this.categoryId]);
          }
          if (+data.status === 400) {
            alert('Category Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          });
      } else {
        this._categoryService.editSubCategory(this.addSubCategoryForm.value)
        .subscribe((data: any) => {
          if (data.status === 200) {
            this._router.navigate(['category/storesubcategories', this.categoryId]);
          }
          if (data.status === 400) {
            alert('Category Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          });
      }
    }
  }
}
