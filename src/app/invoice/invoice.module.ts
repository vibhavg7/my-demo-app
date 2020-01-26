import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceEditComponent } from './invoice-edit.component';
import { InvoiceDashboardComponent } from './invoice-dashboard.component';



@NgModule({
  declarations: [InvoiceEditComponent, InvoiceDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
