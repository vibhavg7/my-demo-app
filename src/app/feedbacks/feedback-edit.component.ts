import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {

  errorMessage: any;
  feedbackId: number;
  customerId: number;
  submitted: boolean;
  addFeedBackForm: FormGroup;
  disableForm = false;
  pageTitle: any;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feedBackService: FeedbackService,
    private router: Router
  ) {
    this.addFeedBackForm = this.formBuilder.group({
      customer_id: [''],
      name: [''],
      email: [''],
      phone: [''],
      message: [''],
      customerCity: [''],
      status: ['']
    });

  }

  get f() { return this.addFeedBackForm.controls; }
  ngOnInit() {
    this.feedbackId = +this.activatedRoute.snapshot.params.feedbackId;
    this.customerId = +this.activatedRoute.snapshot.params.customerId;
    if (this.feedbackId !== 0) {
      this.pageTitle = 'Edit Feedback';
      this.feedBackService.fetchFeedBackDetailById(this.feedbackId).subscribe((data) => {
        console.log(data);
        const feedbackData: any = data.customer_feedback_info;
        this.addFeedBackForm.get('customer_id').setValue(feedbackData[0].customer_id);
        this.addFeedBackForm.get('name').setValue(feedbackData[0].customer_name);
        this.addFeedBackForm.get('email').setValue(feedbackData[0].customer_email);
        this.addFeedBackForm.get('phone').setValue(feedbackData[0].customer_phone);
        this.addFeedBackForm.get('message').setValue(feedbackData[0].feedback_text);
        this.addFeedBackForm.get('customerCity').setValue(feedbackData[0].city);
        this.addFeedBackForm.get('status').setValue(feedbackData[0].status);
      });
    } else {
      this.pageTitle = 'Add New Feedback';
      this.addFeedBackForm.get('customer_id').setValue(this.customerId);
    }
  }

  onSubmit() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.addFeedBackForm.invalid) {
        return;
      }
      console.log('heyyyyy');
      this.feedBackService.addNewFeedBack(this.addFeedBackForm.value, this.feedbackId).subscribe((data: any) => {
        if (data.status === 200) {
          // [routerLink]="[customer?.customer_id,'customerfeedbacks']"
          this.router.navigate([ 'customer', `${this.customerId}`, 'customerfeedbacks' ]);
        }
        if (data.status === 400) {
          alert('Merchant Not Added . Internal Server Error');
          this.disableForm = true;
        }
      },
        (error) => {
          this.errorMessage = error;
          this.disableForm = true;
        });
    }

  }

}
