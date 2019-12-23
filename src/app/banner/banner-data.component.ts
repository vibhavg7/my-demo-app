import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../products/image-upload/image-upload.component';
import { BannerService } from './banner.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-banner-data]',
  templateUrl: './banner-data.component.html',
  styleUrls: ['./banner-data.component.css']
})
export class BannerDataComponent implements OnInit {

  constructor(private modalService: NgbModal, private bannerService: BannerService) {
    console.log('dsdsds');
  }

  // tslint:disable-next-line:no-input-rename
  @Input('bannerInfo') banner: any;

  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  ngOnInit() {
    console.log('dsdsds');
  }

  uploadImage(bannerId: any) {
    console.log(bannerId);
    const modalRef: any = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance.title = 'Image Upload';
    modalRef.componentInstance.id = bannerId;
    modalRef.componentInstance.image_type = 'banners';
    // modalRef.componentInstance.bannerImage.subscribe((data) => {
    //   console.log(data);
    // });
  }

  deleteBanner(bannerId) {
    if (confirm('Are you sure to delete')) {
      this.bannerService.deleteStore(bannerId).subscribe((data) => {
        console.log(data);
      });
    }
  }

}
