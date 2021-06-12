import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicableAreasDashboardComponent } from './servicable-areas-dashboard.component';
import { ServicableAreasDetailComponent } from './servicable-areas-detail/servicable-areas-detail.component';
import { ServicableAreasEditComponent } from './servicable-areas-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicableAreasRoutingModule } from './servicable-areas-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AreaWiseCategoriesComponent } from './servicable-areas-detail/area-wise-categories.component';
import { AreaWiseBannersComponent } from './servicable-areas-detail/area-wise-banners.component';
import { ServicableAreaInfoComponent } from './servicable-areas-detail/servicable-area-info.component';
import { AreaWiseBannerDataComponent } from './servicable-areas-detail/area-wise-banner-data.component';
import { AreaWiseCategoryDataComponent } from './servicable-areas-detail/area-wise-category-data.component';
import { AreaWiseBannerEditComponent } from './servicable-areas-detail/area-wise-banner-edit.component';
import { AreaWisePaymentOptionsComponent } from './servicable-areas-detail/area-wise-payment-options.component';
import { AreaWiseCategoryEditComponent } from './servicable-areas-detail/area-wise-category-edit.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ServicableAreasDashboardComponent,
                 ServicableAreasDetailComponent, ServicableAreasEditComponent,
                 AreaWiseCategoriesComponent,
                 AreaWiseBannersComponent,
                 ServicableAreaInfoComponent,
                 AreaWiseBannerDataComponent,
                 AreaWiseCategoryDataComponent,
                 AreaWiseBannerEditComponent,
                 AreaWisePaymentOptionsComponent,
                 AreaWiseCategoryEditComponent],
  imports: [
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    ServicableAreasRoutingModule,
    SharedModule
  ]
})
export class ServicableAreasModule { }
