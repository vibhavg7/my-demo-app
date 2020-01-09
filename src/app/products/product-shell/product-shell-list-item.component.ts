import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';

@Component({
  selector: 'app-product-shell-list-item',
  templateUrl: './product-shell-list-item.component.html',
  styleUrls: ['./product-shell-list-item.component.css']
})
export class ProductShellListItemComponent implements OnInit {

  constructor(private store: Store<fromProduct.State>) { }
  // tslint:disable-next-line:no-input-rename
  @Input('productInfo1') productData: any;
  showProductCode = false;
  ngOnInit() {
    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe((data) => {
        this.showProductCode = data;
    });
  }

}
