import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  submitted: boolean;
  addCustomerForm: any;
  customerId: any;
  disableForm = false;
  errorMessage: any;
  pageTitle: any;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.addCustomerForm = this.formBuilder.group({
      customerName: [''],
      customerPhone: ['', Validators.required],
      customerDOB: [''],
      customerEmail: [''],
      status: ['']
    });
  }

  get f() { return this.addCustomerForm.controls; }

  ngOnInit() {
    this.customerId = +this.activatedRoute.snapshot.params.customerId;
    if (+this.customerId !== 0) {
      this.pageTitle = 'Add New Customer';
      this.customerService.fetchCustomerInfoById(this.customerId).subscribe((data: any) => {
        const customerData = data.customer_info;
        console.log(customerData);
        this.addCustomerForm.get('customerDOB').setValue(customerData[0].customer_dob);
        this.addCustomerForm.get('customerName').setValue(customerData[0].customer_name);
        this.addCustomerForm.get('customerEmail').setValue(customerData[0].email);
        this.addCustomerForm.get('customerPhone').setValue(customerData[0].phone);
        this.addCustomerForm.get('status').setValue(customerData[0].status);
      });
    } else {
      this.pageTitle = 'Edit Customer';
    }
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addCustomerForm.invalid) {
        this.disableForm = false;
        return;
      }

      if (+this.customerId === 0) {
        console.log('hi');
        this.customerService.registerCustomer(this.addCustomerForm.value).subscribe((data: any) => {
          if (+data.status === 200) {
            this.router.navigate(['customer']);
          }
          if (data.status === 400) {
            alert('Customer Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          });
      } else {
        this.customerService.editCustomer(this.addCustomerForm.value, this.customerId).subscribe((data: any) => {
          console.log(data);
          // tslint:disable-next-line:triple-equals
          if (data.status == 200) {
            this.router.navigate(['customer']);
          }
          // tslint:disable-next-line:triple-equals
          if (data.status == '400') {
            alert('customer Not Added . Internal Server Error');
            this.disableForm = false;
          }
        },
          (error) => {
            this.errorMessage = error;
            this.disableForm = false;
          });
      }
    }
  }

}
