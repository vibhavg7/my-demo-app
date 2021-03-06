import { Component, OnInit, ɵConsole } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopper-category',
  templateUrl: './shopper-category.component.html',
  styleUrls: ['./shopper-category.component.css']
})
export class ShopperCategoryComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  constructor(private _categoryServce: CategoryService, private modalService: NgbModal,
    private formBuilder: FormBuilder, private _activatedRoute: ActivatedRoute) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }
  storeCategories: any = [];
  pageTitle: any = "Store Categories";
  errorMessage: any;
  showImage: any = false;
  displaytype: string = "SC";
  filterBy: any = '';
  currentPage: number = 1;
  pageSize: number = 20;
  imageWidth: number = 80;
  imageHeight: number = 80;
  imageMargin: number = 2;

  ngOnInit() {
    this.storeCategories = this._activatedRoute.snapshot.data['storeCategoriesdata']['categories'];
    this.errorMessage = this._activatedRoute.snapshot.data['storeCategoriesdata']['error'];
    // console.log(this.storeCategories);
  }

  uploadImage(store_category_id: any) {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title'] = 'Image Upload';
    modalRef.componentInstance['id'] = store_category_id;
    modalRef.componentInstance['image_type'] = 'category';
    modalRef.componentInstance['productImage'].subscribe((data) => {
      this.storeCategories.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
    })
  }

  deletestorecategory(data) {
    let category_id = +data['category_id'];
    for (var i = 0; i < this.storeCategories.length; i++) {
      if (this.storeCategories[i].store_category_id === category_id) {
        this.storeCategories.splice(i, 1);
      }
    }
  }


  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
      console.log(data)
    })
      , distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this._categoryServce.getAllStoreCategory(query)))
    )
      .subscribe(res => { this.storeCategories = res['store_categories'] }, err => { this.errorMessage = err; })
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
