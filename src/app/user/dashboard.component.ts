import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardDataCount: any;
  dashboardData: any;
  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const employeeId = currentUser.employee_id;
    this.auth.getAllEmployeeDashboard(employeeId).subscribe((data: any) => {
      if (data.status === 200) {
        this.dashboardData = data.employee_dashboard_info;
        this.dashboardDataCount = data.employee_dashboard_count[0].employee_dashboard_count;
      }
    });
  }

  dashboardClick(category) {
    this.route.navigate([category]);
  }

}
