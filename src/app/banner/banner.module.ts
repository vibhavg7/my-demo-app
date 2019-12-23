import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { BannerDataComponent } from './banner-data.component';
import { SharedModule } from '../shared/shared.module';
import { BannerEditComponent } from './banner-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BannerComponent, BannerDataComponent, BannerEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BannerRoutingModule,
    SharedModule
  ]
})
export class BannerModule { }
