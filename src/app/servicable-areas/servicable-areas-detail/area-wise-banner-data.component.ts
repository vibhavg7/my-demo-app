import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-area-wise-banner-data]',
  templateUrl: './area-wise-banner-data.component.html',
  styleUrls: ['./area-wise-banner-data.component.css']
})
export class AreaWiseBannerDataComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('bannerInfo') banner: any;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;
  constructor() { }

  ngOnInit() {
  }

}
