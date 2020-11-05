import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  errorMessage: any;
  submitted: boolean;
  disableForm: any;
  notificationType: number;
  addNotificationForm: FormGroup;
  constructor(private customerService: CustomerService,
              private formBuilder: FormBuilder,
              private location: Location,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

    this.addNotificationForm = this.formBuilder.group({
      messageBody: ['', Validators.required],
      messageTitle: ['']
    });
  }

  get f() { return this.addNotificationForm.controls; }

  ngOnInit(): void {
    this.notificationType = +this.activatedRoute.snapshot.params.notificationType;
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addNotificationForm.invalid) {
        this.disableForm = false;
        return;
      }
      this.customerService.sendNotification(this.notificationType , this.addNotificationForm.value).subscribe((data: any) => {
        if (+data.status === 200) {
          this.location.back();
          // this.router.navigate(['customer']);
          // this.disableForm = false;
        }
        if (data.status === 400) {
          alert('message not sent . Internal Server Error');
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
