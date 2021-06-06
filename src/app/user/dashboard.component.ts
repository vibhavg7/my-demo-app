import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage: any;
  dashboardDataCount: any;
  dashboardData: any;
  constructor(private route: Router, private auth: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const dashboardData = this.activatedRoute.snapshot.data.dashboards;
    this.dashboardData = dashboardData.employee_dashboard_info;
    this.dashboardDataCount = +dashboardData.dashboardDataCount;
    this.errorMessage = dashboardData.error;
  }

  dashboardClick(category) {
    this.route.navigate([category]);
  }

}
