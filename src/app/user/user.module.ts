import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('users', reducer)
  ]
})
export class UserModule { }
