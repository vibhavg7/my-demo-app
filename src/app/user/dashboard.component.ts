import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardDataCount: any;
  dashboardData: any;
  constructor(private route: Router, private auth: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dashboardData = this.activatedRoute.snapshot.data['dashboards']['employee_dashboard_info'];
    this.dashboardDataCount = +this.activatedRoute.snapshot.data['dashboards']['dashboardDataCount'];
  }

  dashboardClick(category) {
    this.route.navigate([category]);
  }

}
