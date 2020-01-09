import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from './coupon.service';
import { ImageUploadComponent } from '../products/image-upload/image-upload.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-coupon-data]',
  templateUrl: './coupon-data.component.html',
  styleUrls: ['./coupon-data.component.css']
})
export class CouponDataComponent implements OnInit {

  constructor(private modalService: NgbModal, private couponService: CouponService) {
  }

  // tslint:disable-next-line:no-input-rename
  @Input('voucherInfo') voucher: any;

  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  ngOnInit() {
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

  deleteCoupons(voucherid) {
    if (confirm('Are you sure to delete')) {
      this.couponService.deleteCoupon(voucherid).subscribe((data) => {
        console.log(data);
      });
    }
  }

}
