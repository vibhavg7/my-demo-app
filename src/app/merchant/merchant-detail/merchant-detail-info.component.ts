import { Component, OnInit, OnDestroy } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '../../products/image-upload/image-upload.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-merchant-detail-info',
  templateUrl: './merchant-detail-info.component.html',
  styleUrls: ['./merchant-detail-info.component.css']
})
export class MerchantDetailInfoComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  merchantData: any;
  storeId: number;
  errorMessage: any = '';
  open = false;
  color = 'accent';

  constructor(private merchantService: MerchantService,
              private modalService: NgbModal,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.storeId = +this.activatedRoute.parent.params['_value']['storeId'];
    this.merchantService.fetchAllStoreById(this.storeId).subscribe((data: any) => {
      this.merchantData = data.store[0];
      this.open = this.merchantData.closed ? false : true;
      console.log(this.merchantData);
      // console.log(this.merchantData);
    });
  }

  onRatingClicked(data) {

  }

  changeStoreClosingStatus() {
    if (confirm('Are you sure you want to update ')) {
      const closingStatus = (+ this.open === 1) ? 0 : 1;
      this.merchantService.updateStoreClosingStatus(this.storeId, closingStatus).subscribe((data: any) => {
        if (data.status === 200) {
          alert(data.message);
        }
      });
    } else {
      if (this.open) {
        setTimeout(() => {
          this.open = false;
        });
      } else {
        setTimeout(() => {
          this.open = true;
        });
      }
    }

  }



  uploadImage(storeid: any) {
    const modalRef: any = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance.title = 'Image Upload';
    modalRef.componentInstance.id = storeid;
    modalRef.componentInstance.image_type = 'merchants';
    modalRef.componentInstance.productImage.subscribe((data: any) => {
      console.log(data);
      console.log(this.merchantData);
      this.merchantData.image_url = data.image_url;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
