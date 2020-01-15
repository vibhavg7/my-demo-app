import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Grostep Panel';
  loading = true;
  navbarOpen = false;
  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((routerevent: Event) => {
      this.checkRouterEvent(routerevent);
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  checkRouterEvent(navigatorEvent: Event) {
    if (navigatorEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (navigatorEvent instanceof NavigationEnd ||
      navigatorEvent instanceof NavigationError ||
      navigatorEvent instanceof NavigationCancel) {
      this.loading = false;
    }
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get userName() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return (currentUser) ? currentUser.username : '';
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
