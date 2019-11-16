import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';

@Component({
  selector: '[app-shopper-category-data]',
  templateUrl: './shopper-category-data.component.html',
  styleUrls: ['./shopper-category-data.component.css']
})
export class ShopperCategoryDataComponent implements OnInit {

  constructor(private modalService:NgbModal) { }
  @Input('storeCategoryInfo1') storeCategory: any;
  imageWidth: number = 80;
  imageHeight : number = 80;
  imageMargin: number = 2;
  ngOnInit() {
    console.log(this.storeCategory);
  }

  ngOnChange()
  {
    console.log(this.storeCategory);
  }

  // uploadImage(store_id: any) {
  //   const modalRef = this.modalService.open(ImageUploadComponent);
  //   modalRef.componentInstance['title'] = 'Image Upload';
  //   modalRef.componentInstance['id'] = store_id;
  //   modalRef.componentInstance['image_type'] = 'merchants';
  //   modalRef.componentInstance['productImage'].subscribe((data) => {
  //   console.log(data);
  //   this.storeCategory = data;
  //     // this.stores.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
  //     // console.log(this.storeCategories);
  //   })
  // }

  uploadImage(store_category_id:any)
  {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title']= 'Image Upload';
    modalRef.componentInstance['id']= store_category_id;
    modalRef.componentInstance['image_type']= 'category';
    modalRef.componentInstance['productImage'].subscribe((data)=>{
      this.storeCategory = data;
      console.log(data);
      // this.storeCategories.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
      // console.log(this.storeCategories);
    })
  }

}
