import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-product-shell-detail',
  templateUrl: './product-shell-detail.component.html',
  styleUrls: ['./product-shell-detail.component.css']
})
export class ProductShellDetailComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService, private modalService: NgbModal) { }
  // productData : IProduct;
  errorMessage: string;
  pageTitle = 'Product Detail';
  productData: IProduct;
  sub: Subscription;
  imageurl: any = '';
  productid: any = '';
  // productData = this._productService._currentProduct;
  // get productData() : IProduct | null
  // {
  //   return this._productService._currentProduct;
  // }
  ngOnInit() {
    this.sub = this.productService.selectProductChanges$.subscribe((data: any) => {
      if (data) {
        this.imageurl = data.image_url;
        this.productid = data.productId;
      }
      this.productData = data;
      console.log(this.productData);
    });
  }

  onRatingClicked(data) {

  }

  uploadImage() {
    // console.log(this.product_id);
    const modalRef: any = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance.title = 'Image Upload';
    modalRef.componentInstance.image_type = 'products';
    modalRef.componentInstance.id = this.productid;
    modalRef.componentInstance.productImage.subscribe((data) => {
      this.imageurl = data.image_url;
      this.productService.updateProductImageUrl(this.imageurl, this.productid);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
