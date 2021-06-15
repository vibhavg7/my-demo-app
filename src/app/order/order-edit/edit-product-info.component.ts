import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product-info',
  templateUrl: './edit-product-info.component.html',
  styleUrls: ['./edit-product-info.component.css']
})
export class EditProductInfoComponent implements OnInit {

  orderid: any;
  orderProducts: any = [];
  errorMessage: any;
  pageTitle = 'Edit Order Products';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderid = this.activatedRoute.parent.snapshot.params.orderid;
    this.orderProducts = this.activatedRoute.snapshot.data.resolvedProducts.orderProducts;
    this.orderProducts.forEach(element => {
      element.canEditQuanity = false;
    });
    console.log(this.orderProducts);
    this.errorMessage = this.activatedRoute.snapshot.data.resolvedProducts.error;
  }

  editProduct(productId) {
    const objIndex = this.orderProducts.findIndex((obj => obj.store_product_mapping_id === productId));
    this.orderProducts[objIndex].canEditQuanity = true;

    console.log(objIndex);
  }

  deleteProduct(productId) {
    console.log(productId);
  }

  updateProduct(productId) {
    console.log(productId);
  }

}
