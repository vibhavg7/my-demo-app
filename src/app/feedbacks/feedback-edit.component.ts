import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted: boolean;
  addFeedBackForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private feedBackService: FeedbackService,
    private router: Router
  ) {
    this.addFeedBackForm = this.formBuilder.group({
      customer_id: [''],
      name: ['', Validators.required],
      email: [''],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      customerCity: ['']
      // status: ['']
    });

  }

  get f() { return this.addFeedBackForm.controls; }
  ngOnInit() {
    this.feedbackId = +this.activatedRoute.snapshot.params.feedbackId;
    if (this.feedbackId !== 0) {

    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.addFeedBackForm.invalid) {
      return;
    }
    // console.log(this.addFeedBackForm.value);
    // console.log(this.feedbackId);

    if (this.feedbackId === 0) {
      this.feedBackService.addNewFeedBack(this.addFeedBackForm.value).subscribe((data) => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.status == '200') {
          this.router.navigate(['feedbacks']);
        }
        // tslint:disable-next-line:triple-equals
        if (data.status == '400') {
          alert('FeedBack Not Added . Internal Server Error');
        }
      },
        (error) => {
          this.errorMessage = error;
        });
    } else {
      // console.log('Hiiiiiiiiiiiiiiii');
      // this.feedBackService.editFeedBack(this.addFeedBackForm.value, this.feedbackId).subscribe((data) => {
      //   console.log(data);
      //   // tslint:disable-next-line:triple-equals
      //   if (data.status == '200') {
      //     this.router.navigate(['merchant']);
      //   }
      //   // tslint:disable-next-line:triple-equals
      //   if (data.status == '400') {
      //     alert('Merchant Not Added . Internal Server Error');
      //   }
      // },
      //   (error) => {
      //     this.errorMessage = error;
      //   });
    }

  }

}
