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

  errorMessage: any;
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
    this.storesubcategoryId = +this._activatedRoute.snapshot.params['categoryId'];
    this.subcategoryId = +this._activatedRoute.snapshot.params['subcategory'];
    console.log(this.subcategoryId);
    if (this.subcategoryId != 0) {
      this._categoryService.getSubCategoryData(this.subcategoryId).subscribe((data) => {
        console.log(data);
        this.addSubCategoryForm.get('subcategoryName').setValue(data[0]['name']);
        this.addSubCategoryForm.get('subcategoryId').setValue(data[0]['category_id']);
        // this.addSubCategoryForm.get('storeCategoryName').setValue(this.storesubcategoryId);        
        // this.addSubCategoryForm.get('categoryRanking').setValue(data[0]['ranking']);
        // this.addSubCategoryForm.get('status').setValue(data[0]['status']);
      });
    }
    this._categoryService.getStoreSubCategoryData(this.storesubcategoryId,"").subscribe((data) => {
      // console.log(data['store_categories'][0]['store_sub_category_name']);
      this.storeSubCategories = data['store_categories'][0]['store_sub_category_name'];
      console.log(this.storeSubCategories);
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.addSubCategoryForm.value);
    if (this.addSubCategoryForm.invalid) {
      return;
    }
    if (this.subcategoryId == 0) {
      this._categoryService.addNewSubCategory(this.addSubCategoryForm.value).subscribe((data) => {
        console.log(data);
        if (data.status == "200") {
          this._router.navigate(['category/storesubcategories',this.storesubcategoryId]);
        }
        if (data.status == "400") {
          alert('Category Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        })
    }
    else {
      console.log(this.addSubCategoryForm.value);
      // this._categoryService.editStoreCategory(this.addStoreCategoryForm.value,this.storeCategoryId);
      this._categoryService.editSubCategory(this.addSubCategoryForm.value)
      .subscribe((data) => {
        console.log(data);
        if (data.status == "200") {
          this._router.navigate(['category/storesubcategories',this.storesubcategoryId]);
        }
        if (data.status == "400") {
          alert('Category Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        })
    }
  }

}
