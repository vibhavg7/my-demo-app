import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicableAreasService } from '../servicable-areas-service';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-area-wise-category-edit',
  templateUrl: './area-wise-category-edit.component.html',
  styleUrls: ['./area-wise-category-edit.component.css']
})
export class AreaWiseCategoryEditComponent implements OnInit {

  errorMessage: any;
  submitted: boolean;
  selectedCategory: any;
  results: any;
  categoryValueSet: boolean;
  categoryId: number;
  areaId: number;
  addAreaWiseCategoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicableAreasService: ServicableAreasService
  ) {
    this.addAreaWiseCategoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
      categoryText: ['', Validators.required],
      categoryRanking: ['', Validators.required],
      status: ['']
    });
  }

  get f() { return this.addAreaWiseCategoryForm.controls; }

  ngOnInit() {
    this.areaId = +this.activatedRoute.snapshot.params.areaId;
    this.categoryId = +this.activatedRoute.snapshot.params.areacategoryId;
    if (this.categoryId !== 0 && this.areaId !== 0) {
      this.servicableAreasService.fetchDeliveryCategoryInfoById(this.categoryId).subscribe((data: any) => {
        const categoryData = data.categoryData;
        console.log(categoryData[0]);
        this.addAreaWiseCategoryForm.get('categoryName').setValue(categoryData[0].store_category_name);
        this.addAreaWiseCategoryForm.get('categoryText').setValue(categoryData[0].category_text);
        this.addAreaWiseCategoryForm.get('categoryRanking').setValue(categoryData[0].category_ranking);
        this.addAreaWiseCategoryForm.get('status').setValue(categoryData[0].status);
      });
    }
  }

  onChanges() {
    this.categoryValueSet = false;
    this.addAreaWiseCategoryForm.get('categoryName').valueChanges.pipe(tap(data => {
      console.log(data);
    }), distinctUntilChanged(), debounceTime(200),
      switchMap((query) => {
        if (!this.categoryValueSet) {
          return this.servicableAreasService.searchAreaWiseCategories(query);
        } else {
          this.categoryValueSet = true;
          return of([]);
        }
      }))
      .subscribe((res: any) => { this.results = res.categoryData; console.log(this.results); });
  }

  categorySelected(category) {
    console.log(category);
    this.results = [];
    this.categoryValueSet = true;
    this.selectedCategory = category;
    this.addAreaWiseCategoryForm.get('categoryName').setValue(this.selectedCategory.store_category_name);
  }

  onSubmit() {
    this.submitted = true;
    if (this.addAreaWiseCategoryForm.invalid) {
      return;
    }

    if (this.categoryId === 0) {
      this.servicableAreasService.addAreaWiseCategory(this.addAreaWiseCategoryForm.value, this.selectedCategory, this.areaId)
        .subscribe((data: any) => {
          console.log(data);
          if (data.status === 200) {
            this.router.navigate([`servicableareas/${this.areaId}/categories`]);
          }
          if (data.status === 400) {
            alert('Category Not Added . Internal Server Error');
          }
        },
          (error) => {
            this.errorMessage = error;
          }
        );
    } else {
      if (this.selectedCategory !== undefined) {
        this.servicableAreasService.addAreaWiseCategory(this.addAreaWiseCategoryForm.value, this.selectedCategory, this.areaId)
          .subscribe((data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.router.navigate([`servicableareas/${this.areaId}/categories`]);
            }
            if (data.status === 400) {
              alert('Category Not Added . Internal Server Error');
            }
          },
            (error) => {
              this.errorMessage = error;
            }
          );
      } else {
        this.servicableAreasService.editAreaWiseCategory(this.addAreaWiseCategoryForm.value, this.categoryId)
          .subscribe((data: any) => {
            console.log(data);
            if (data.status === 200) {
              this.router.navigate([`servicableareas/${this.areaId}/categories`]);
            }
            if (data.status === 400) {
              alert('Category Not Added . Internal Server Error');
            }
          },
            (error) => {
              this.errorMessage = error;
            }
          );
      }
    }
  }

}
