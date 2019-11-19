import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-shell-list-item',
  templateUrl: './product-shell-list-item.component.html',
  styleUrls: ['./product-shell-list-item.component.css']
})
export class ProductShellListItemComponent implements OnInit {

  constructor() { }
  @Input('productInfo1') productData: any;
  ngOnInit() {
  }

}
