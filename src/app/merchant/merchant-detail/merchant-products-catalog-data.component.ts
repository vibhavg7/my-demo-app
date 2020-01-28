import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MerchantService } from '../merchant.service';

@Component({
  selector: '[app-merchant-products-catalog-data]',
  templateUrl: './merchant-products-catalog-data.component.html',
  styleUrls: ['./merchant-products-catalog-data.component.css']
})
export class MerchantProductsCatalogDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('storeProductsInfo') storeProductsInfo: any;
  // tslint:disable-next-line:no-output-rename
  @Output('deletestoreproduct') deletestoreproduct =  new EventEmitter<any>();
  checkbox: any;
  constructor(private merchantService: MerchantService) { }

  ngOnInit() {
      if (this.storeProductsInfo.stock === 1) {
        this.storeProductsInfo.checked = true;
      } else {
        this.storeProductsInfo.checked = false;
      }
      this.checkbox = this.storeProductsInfo.checked;
  }

  updateProductStock() {
    if (confirm('Are you sure you want to update ')) {
      const stock = (+ this.storeProductsInfo.stock === 1) ? 0 : 1;
      this.merchantService.updateStoreProductStock(this.storeProductsInfo.store_product_mapping_id, stock).subscribe((data: any) => {
        if (data.status === 200) {
          alert(data.message);
        }
      });
    } else {
      if (this.checkbox) {
        setTimeout(() => {
          this.checkbox = false;
        });
      } else {
        setTimeout(() => {
          this.checkbox = true;
        });
      }
      // this.store_products_info.map((data: any) => {
      //     if (data.store_product_mapping_id === storeProductId) {
      //       data.stock = data.stock;
      //       // console.log(event.target.value);
      //       console.log(data);
      //       // data.stock = 0;
      //     }
      // });
    }
  }

  deleteStoreProduct(storeproductid) {
    if (confirm('Are you sure to delete ')) {
      this.merchantService.deleteStoreProduct(storeproductid).subscribe((data) => {
        console.log(data);
        this.deletestoreproduct.emit(data);
      });
    }
  }

}
