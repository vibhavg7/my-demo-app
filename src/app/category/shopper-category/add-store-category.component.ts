import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-store-category',
  templateUrl: './add-store-category.component.html',
  styleUrls: ['./add-store-category.component.css']
})
export class AddStoreCategoryComponent implements OnInit {

  storeCategoryId: any;
  addStoreCategoryForm: FormGroup;
  submitted: any;
  disableForm = false;
  errorMessage: any;
  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.addStoreCategoryForm = this.formBuilder.group({
      storeCategoryName: ['', Validators.required],
      storeCategoryRanking: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addStoreCategoryForm.controls; }

  ngOnInit() {
    this.storeCategoryId = +this.activatedRoute.snapshot.params.storeCategoryId;
    if (this.storeCategoryId !== 0) {
      this.categoryService.getStoreCategory(this.storeCategoryId).subscribe((data: any) => {
        const storecategorydata = data.category;
        console.log(storecategorydata);
        this.addStoreCategoryForm.get('storeCategoryName').setValue(storecategorydata[0].store_category_name);
        this.addStoreCategoryForm.get('storeCategoryRanking').setValue(storecategorydata[0].store_category_ranking);
        this.addStoreCategoryForm.get('status').setValue(storecategorydata[0].status);
      });
    }
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addStoreCategoryForm.invalid) {
        this.disableForm = false;
        return;
      }
      if (this.storeCategoryId === '') {
        this.categoryService.addNewStoreCategory(this.addStoreCategoryForm.value).subscribe((data: any) => {
          if (+data.status === 200) {
            this.router.navigate(['category/storecategories']);
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
        this.categoryService.editStoreCategory(this.addStoreCategoryForm.value, this.storeCategoryId).subscribe((data: any) => {
          if (+data.status === 200) {
            this.router.navigate(['category/storecategories']);
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
      }
    }


  }

}
