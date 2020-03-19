import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicableAreasDashboardComponent } from './servicable-areas-dashboard.component';
import { ServicableAreasResolverService } from './servicable-areas-resolver-service';
import { ServicableAreasDetailComponent } from './servicable-areas-detail/servicable-areas-detail.component';
import { ServicableAreasEditComponent } from './servicable-areas-edit.component';
import { AreaWiseBannersComponent } from './servicable-areas-detail/area-wise-banners.component';
import { AreaWiseCategoriesComponent } from './servicable-areas-detail/area-wise-categories.component';
import { ServicableAreaInfoComponent } from './servicable-areas-detail/servicable-area-info.component';
import { AreaWiseBannerEditComponent } from './servicable-areas-detail/area-wise-banner-edit.component';
import { AreaWisePaymentOptionsComponent } from './servicable-areas-detail/area-wise-payment-options.component';
import { AreaWiseCategoryEditComponent } from './servicable-areas-detail/area-wise-category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ServicableAreasDashboardComponent,
    resolve: { serviceareas: ServicableAreasResolverService }
  },
  {
    path: ':areaId',
    component: ServicableAreasDetailComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: ServicableAreaInfoComponent },
      { path: 'banners', component: AreaWiseBannersComponent },
      { path: 'categories', component: AreaWiseCategoriesComponent },
      { path: 'paymentoptions', component: AreaWisePaymentOptionsComponent}
    ]
  },
  {
    path: ':areaId/banners/:areabannerId/edit',
    component: AreaWiseBannerEditComponent
  },
  {
    path: ':areaId/categories/:areacategoryId/edit',
    component: AreaWiseCategoryEditComponent
  },
  {
    path: ':areaId/edit',
    component: ServicableAreasEditComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServicableAreasRoutingModule { }
