import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriteriaComponent } from './criteria/criteria.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { NotificationComponent } from './notification/notification.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { UpperCaseName } from './upper-case-name';
import { ConvertTimeToAmPmPipe } from './convert-time-to-am-pm.pipe';



@NgModule({
  declarations: [
    StarComponent,
    CriteriaComponent,
    PaginationComponent,
    UpperCaseName,
    NotificationComponent,
    UnauthorizedComponent,
    ConvertTimeToAmPmPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    CriteriaComponent,
    PaginationComponent,
    UpperCaseName,
    ConvertTimeToAmPmPipe
  ]
})
export class SharedModule { }
