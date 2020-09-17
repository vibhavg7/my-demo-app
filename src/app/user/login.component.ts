import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService,
              private store: Store<any>,
              private router: Router) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.router.navigate(['welcome']);
    }
  }
  pageTitle: any = 'Login';
  employee: any = { user_name: '', password: '' };
  // maskUserName: boolean;
  ngOnInit() {
    // return (currentUser) ? currentUser.username : '';
    // console.log('Hi');
    // this.store.pipe(select('users')).subscribe((data) => {
    //   if (data) {
    //     this.maskUserName = data['maskUserName'];
    //   }
    // });
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.employee["user_name"] = userName;
      this.employee["password"] = password;
      this.authService.login(this.employee).subscribe((data) => {
        console.log(data);
        if (data['employeeData'][0] != undefined && data['employeeData'].length > 0) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
          } else {
            this.router.navigate(['/dashboard']);
          }
        }
        else {
          this.errorMessage = "Please enter valid username and password";
          console.log(this.errorMessage);
        }
      });
      // Navigate to the Product List page after log in.
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

  checkChanged(value) {
    this.store.dispatch({
      type: 'MASK_USER_NAME',
      payload: value
    })
  }

}
