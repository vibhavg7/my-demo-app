import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../products/image-upload/image-upload.component';
import { MerchantService } from './merchant.service';

@Component({
  selector: '[app-merchant-data]',
  templateUrl: './merchant-data.component.html',
  styleUrls: ['./merchant-data.component.css']
})
export class MerchantDataComponent implements OnInit {

  constructor(private modalService: NgbModal,private _merchantService:MerchantService) { }
  @Input('storeInfo') store: any;
  imageWidth: number = 80;
  imageHeight: number = 80;
  imageMargin: number = 2;
  ngOnInit() {

  }

  uploadImage(store_id: any) {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title'] = 'Image Upload';
    modalRef.componentInstance['id'] = store_id;
    modalRef.componentInstance['image_type'] = 'merchants';
    modalRef.componentInstance['productImage'].subscribe((data) => {
    console.log(data);
    this.store = data;
      // this.stores.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
      // console.log(this.storeCategories);
    })
  }

  deleteStore(store_id)
  {
    if (confirm("Are you sure to delete ")) {
      this._merchantService.deleteStore(store_id).subscribe((data) => {
        console.log(data);
      })
    }
  }

}
