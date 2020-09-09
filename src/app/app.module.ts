import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadComponent } from './products/image-upload/image-upload.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MerchantOrderProductListComponent } from './merchant/merchant-detail/merchant-order-product-list.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ImageUploadComponent,
    MerchantOrderProductListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    NgbModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      name: 'Grostep app dev tools',
      maxAge: 25,
      logOnly: environment.production
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ImageUploadComponent,
    MerchantOrderProductListComponent
  ]
})
export class AppModule { }
