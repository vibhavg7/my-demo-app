import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryId: any;
  submitted: boolean;
  errorMessage: string;
  url: string;
  addCategoryForm: any;
  disableForm = false;
  storeCategories: any;
  pageTitle = 'Add Category';
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.addCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      storeCategoryName: ['', Validators.required],
      categoryRanking: [''],
      status: ['']
    });
  }

  get f() { return this.addCategoryForm.controls; }
  ngOnInit() {
    this.categoryId = +this.activatedRoute.snapshot.params.categoryId;
    if (this.categoryId !== 0) {
      this.categoryService.getSubCategoryData(this.categoryId).subscribe((data) => {
        console.log(data);
        this.addCategoryForm.get('categoryName').setValue(data[0]['name']);
        this.addCategoryForm.get('storeCategoryName').setValue(data[0]['store_category_id']);
        this.addCategoryForm.get('categoryRanking').setValue(data[0]['ranking']);
        this.addCategoryForm.get('status').setValue(data[0]['status']);
      });
    }
    this.categoryService.storeCategories.subscribe((data: any) => {
      this.storeCategories = data.store_categories;
    });
  }

  onSubmit() {
    if (!this.disableForm) {
      if (this.disableForm) {
        this.submitted = true;
        this.disableForm = true;
        if (this.addCategoryForm.invalid) {
          this.disableForm = false;
          return;
        }
        if (this.categoryId === 0) {
          this.categoryService.addNewStoreSubCategory(this.addCategoryForm.value).subscribe((data: any) => {
            if (+data.status === 200) {
              this.router.navigate(['category/storesubcategories', this.addCategoryForm.value['storeCategoryName']]);
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
        } else {
          this.categoryService.editStoreSubCategory(this.addCategoryForm.value, this.categoryId)
          .subscribe((data) => {
            if (data.status === 200) {
              this.router.navigate(['category/storecategories']);
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
}
