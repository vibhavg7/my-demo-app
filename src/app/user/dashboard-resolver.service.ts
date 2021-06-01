import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any> {

  constructor(private auth: AuthService) { }
  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const employeeId = currentUser.employee_id;
    return this.auth.getAllEmployeeDashboard(employeeId)
      .pipe(
        map(dashboardResolver => (
          { employee_dashboard_info: dashboardResolver.employee_dashboard_info,
            dashboardDataCount: dashboardResolver.employee_dashboard_count[0].employee_dashboard_count, error: '' })
        ),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.log(message);
          return of({ employee_dashboard_info: null, dashboardDataCount: 0, error: message });
        })
      );
  }
}

// if (data.status === 200) {
//   this.dashboardData = data.employee_dashboard_info;
//   this.dashboardDataCount = data.employee_dashboard_count[0].employee_dashboard_count;
// }
