import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner.component';
import { BannerEditComponent } from './banner-edit.component';


const routes: Routes = [
    {
        path: '',
        component: BannerComponent
    },
    {
      path: ':bannerId/edit',
      component: BannerEditComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BannerRoutingModule {

}
