import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-area-wise-category-data]',
  templateUrl: './area-wise-category-data.component.html',
  styleUrls: ['./area-wise-category-data.component.css']
})
export class AreaWiseCategoryDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('categoryInfo') category: any;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  constructor() { }

  ngOnInit() {
  }

}
