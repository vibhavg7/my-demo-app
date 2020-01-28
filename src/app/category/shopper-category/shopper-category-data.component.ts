import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';
import { CategoryService } from '../category.service';

@Component({
  selector: '[app-shopper-category-data]',
  templateUrl: './shopper-category-data.component.html',
  styleUrls: ['./shopper-category-data.component.css']
})
export class ShopperCategoryDataComponent implements OnInit {

  constructor(private modalService: NgbModal, private _categoryService: CategoryService) { }
  @Input('storeCategoryInfo') storeCategory: any;
  @Output('deletestorecategory') deletestorecategory =  new EventEmitter<any>();
  imageWidth: number = 80;
  imageHeight: number = 80;
  imageMargin: number = 2;
  ngOnInit() {
    // console.log(this.storeCategory);
  }

  ngOnChange() {
    // console.log(this.storeCategory);
  }

  uploadImage(store_category_id: any) {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title'] = 'Image Upload';
    modalRef.componentInstance['id'] = store_category_id;
    modalRef.componentInstance['image_type'] = 'category';
    modalRef.componentInstance['productImage'].subscribe((data) => {
      this.storeCategory['store_image_url'] = data['image_url'];
    })
  }

  deleteCategory(store_category_id) {
    if (confirm("Are you sure to delete ")) {
      this._categoryService.deleteStoreCategory(store_category_id).subscribe((data) => {
        console.log(data);
        this.deletestorecategory.emit(data);
      });
    }
  }

}
